# -*- coding: utf-8 -*-
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
    feed_name = request.args(0)
    axis_name = request.args(1)
    try:
        feed_conf, feed_axis = get_feed_axis(feed_name, axis_name)
    except ExceptionNotFound, err:
        return dict(error="Please specifiy a feed and feed axis")

    if feed_name == None or feed_axis == None:
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
def feed_live():
    feed_name = request.args(0)
    axis_name = request.args(1)
    try:
        feed_conf, feed_axis = get_feed_axis(feed_name, axis_name)
    except ExceptionNotFound, err:
        return dict(error="Please specifiy a feed and feed axis")
    if feed_name == None or feed_axis == None:
        return dict(error="Please specifiy a feed and feed axis")

    row = db(db.feed_data.feed_axis_id == feed_axis.id).select(orderby=db.feed_data.entry_time).last()

    return dict(row=row)
