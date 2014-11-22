# -*- coding: utf-8 -*-
import datetime
import calendar

from gluon.serializers import json
auth.settings.allow_basic_login = True

'''
Found some help on auth here.
http://www.web2pyslices.com/slice/show/1533/restful-api-with-web2py

I really need to get this done so i can extract the common code out, but
first must make sure they do not deviate.
'''

def index():
    dct = {'services':'are up!'}
    #response.generic_patterns = ['*.json']
    return dct

#@request.restful()
@auth.requires_login()
def feed_input():
    '''
    This is the source of the data into the system.
    
    Input:
    arg 0: feed_name
    arg 1: axis_name
    
    kwargs x: data for x
    kwargs y: data for y
    
    '''
    feed_name = request.args(0)
    axis_name = request.args(1)
    try:
        feed_conf, feed_axis = get_feed_axis(feed_name, axis_name)
    except ExceptionNotFound, err:
        response.status = 500
        return dict(error="Please specifiy a valid feed and feed axis")

    #check to make sure we have the feed name and axis object
    if feed_name == None or feed_axis == None:
        response.status = 500
        return dict(error="Please specifiy a feed and feed axis")


    print "%s: input from %s" % (datetime.datetime.now(), auth.user.email)
    try:
        #http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/sin_wave_over_time_in_seconds/0/?x=1&y=2
        #we must make sure we get the right objects back
        #lets make sure x and y exist and cast them
        x, y = parse_vars(feed_conf, request.vars)

        #now we have the feed_conf and feed_axis
        db.feed_data.insert(feed_axis_id=feed_axis.id, x=x, y=y)

        del feed_axis
        del feed_conf
    except Exception, err:
        #print "Error:%s" % str(err)
        #error_str = str(err)
        error_str = "\n".join(extract_traceback())
        response.status = 500
        return dict(error=error_str)
    return locals()

#@request.restful()
@auth.requires_login()
def feed_output():
    feed_name = request.args(0)
    axis_name = request.args(1)
    try:
        feed_conf, feed_axis = get_feed_axis(feed_name, axis_name)
    except ExceptionNotFound, err:
        return dict(error="Please specifiy a feed and feed axis")
    if feed_name == None or feed_axis == None:
        return dict(error="Please specifiy a feed and feed axis")

    rows = db(db.feed_data.feed_axis_id == feed_axis.id).select()

    return dict(rows=rows)


@auth.requires_login()
def feed_live_axis():
    feed_name = request.args(0)
    axis_name = request.args(1)
    try:
        feed_conf, feed_axis = get_feed_axis(feed_name, axis_name)
    except ExceptionNotFound, err:
        return dict(error="Please specifiy a feed and feed axis")
    if feed_name == None or feed_axis == None:
        return dict(error="Please specifiy a feed and feed axis")

    row = db(db.feed_data.feed_axis_id == feed_axis.id).select(orderby=db.feed_data.entry_time).last()
    if row:
        #now lets get the one right before it
        row_prev = db((db.feed_data.feed_axis_id == feed_axis.id) & (db.feed_data.entry_time < row.entry_time)).select(orderby=db.feed_data.entry_time).last()
        #This is to make the format look nicer
        if row_prev.y == row.y: #constant
            state = 0
        elif row_prev.y < row.y: #lower
            state = 1
        else: #raise
            state = -1
        dct = {'id':row.id, 'x':row.x, 'y':row.y, 'entry_time':row.entry_time, 'state':state}
    else:

        row_prev = row
        state = None
        dct = {'id':None, 'x':None, 'y':None, 'entry_time':None, 'state':state}


    return dct

@auth.requires_login()
def feed_cache():
    '''
    input
    
    feed_id, arg 0
    age(optional), arg 1
    
    This will grab the last n records to populate the cache only if 
    the data is less than 12 hours old unless arg(1) is specified as a integer
    for age of data.'''
    row_count = 32
    age = 12
    feed_id = request.args(0)
    requested_age = request.args(1)
    if requested_age != None:
        try:
            age = int(requested_age)
        except ValueError:
            response.status = 403
            return dict(error="Invalid input for age")

    auth_query = db.feed.feed_owner_id == auth.user
    feed = db((db.feed.id == feed_id) & auth_query).select().first()
    if not feed:
        #don't know if this is the right code
        #500 might be the right code here
        response.status = 403
        return dict(error="No feed found for selected input")
    y_func = get_cast_func(feed.y_cast)
    #this could be a variable in the database for the feed
    past = request.now - datetime.timedelta(hours=age)
    past_query = db.feed_data.entry_time > past
    #get each axis
    axes = db(db.feed_axis.feed_id == feed_id).select(db.feed_axis.name, db.feed_axis.id)
    #get each axes data
    x_accessor = 'date'
    y_accessor = set()
    max_ids = {}
    major_min_y = None
    major_max_y = None
    data_lst = []
    for axis in axes:
        #give me the last 32 records
        #reverse order with limit
        rows = db((db.feed_data.feed_axis_id == axis.id) & (past_query)).select(orderby= ~db.feed_data.entry_time, limitby=(0, row_count))
        y_accessor.add(axis.name)
        axis_data_lst, max_id, min_y, max_y = process_row(rows, axis.name, y_func)
        max_ids[axis.name] = max_id
        if major_min_y == None:
            major_min_y = min_y
        else:
            if min_y < major_min_y:
                major_min_y = min_y
        if major_max_y == None:
            major_max_y = max_y
        else:
            if max_y > major_max_y:
                major_max_y = max_y
        data_lst.extend(axis_data_lst)
    return {'data':data_lst, 'y_accessor':list(y_accessor), 'x_accessor':x_accessor, 'max_ids':max_ids, 'min_y':major_min_y, 'max_y': major_max_y}

@auth.requires_login()
def feed_live_from_data_id():
    '''
    input
    feed_name, arg 0
    axis_name, arg 1
    data_id, arg 2 
    age(optional), arg 3
    
    returns rows only greater than the id sent in only if they were added
    within the last 12 hours old unless arg(3) is specified as a integer
    for age of data.'''
    feed_name = request.args(0)
    axis_name = request.args(1)
    data_id = int(request.args(2))

    age = 12
    requested_age = request.args(3)
    if requested_age != None:
        try:
            age = int(requested_age)
        except ValueError:
            response.status = 403
            return dict(error="Invalid input for age")

    past = request.now - datetime.timedelta(hours=age)
    past_query = db.feed_data.entry_time > past

    try:
        feed, feed_axis = get_feed_axis(feed_name, axis_name)
    except ExceptionNotFound, err:
        return dict(error="Please specifiy a feed and feed axis")
    if feed_name == None or feed_axis == None:
        return dict(error="Please specifiy a feed and feed axis")
    y_func = get_cast_func(feed.y_cast)

    rows = db((db.feed_data.feed_axis_id == feed_axis.id) & (db.feed_data.id > data_id) & (past_query)).select(orderby=db.feed_data.entry_time)
    axis_data_lst, max_id, min_y, max_y = process_row(rows, feed_axis.name, y_func)
    return dict(data=axis_data_lst, max_id=max_id, min_y=min_y, max_y=max_y)

