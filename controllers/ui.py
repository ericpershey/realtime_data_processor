# -*- coding: utf-8 -*-
# try something like
def index():
    return dict(message="hello from ui.py")



@auth.requires_login()
def feed_list():
    '''this will display the status of a feed or show the list of available 
    feeds'''
    auth_query = db.feed.feed_owner_id == auth.user
    rows = db(auth_query).select()
    return dict(rows=rows)

@auth.requires_login()
def ajax_axis():
    '''This will handle the adding of axes
    
    TODO: don't send the full TR if it's an update and don't allow duplicates.
    '''
    try:
        feed_id = int(request.args(0))
        feed = db(db.feed.id == feed_id).select().first()
        form = get_axis_form(feed_id)
        if form.accepts(request.vars):
            feed_axis = db(db.feed_axis.name == request.vars['name']).select().first()
            response.flash = "Accepted"
            row = TR(TD(feed.name), TD(feed_axis.name), TD(-1)) + TR(_id='feed_axis_list_form_result')
        elif form.errors:
            response.flash = "Errors:%s" % BEAUTIFY(form.errors)
            row = TR()
        else:
            response.flash = "Failed"
            row = TR()

        print "HELP", str(request.vars)
    except Exception, err:
        print '\n'.join(extract_traceback())
    return dict(row=row)

@auth.requires_login()
def ajax_axis_delete():
    print "Deleting %s" % request.args(0)
    db(db.feed_axis.id == request.args(0)).delete()
    db.commit()
    return {}


@auth.requires_login()
def feed_axis_list():
    auth_query = db.feed.feed_owner_id == auth.user
    count = db.feed_data.x.count().with_alias('count')
    feed_id = request.args(0)
    feed = db(db.feed.id == feed_id).select().first()
    #this was done without count
    #            this isolates it to the axis                auth            this isolates it to join
    #rows = db((db.feed_axis.feed_id == feed_id) & (auth_query) & (db.feed_axis.feed_id == db.feed.id)).select(db.feed_axis.ALL, db.feed.ALL)
    #with count
    rows = db((db.feed_axis.feed_id == feed_id) & (auth_query) & (db.feed_axis.feed_id == db.feed.id)).select(db.feed_axis.ALL, db.feed.ALL, count, left=db.feed_data.on(db.feed_axis.id == db.feed_data.feed_axis_id), groupby=(db.feed.name, db.feed_axis.name))
    print "getting form with feed_id:%s" % feed_id
    form = get_axis_form(feed_id)
    print form.hidden_fields()
    return dict(feed=feed, rows=rows, form=form)

@auth.requires_login()
def feed_data():
    '''This controller expects a feed axis id as arg 0 to pull the data for that axis.
    The view should have links back to the conf and axis
    '''
    #this auth query caused an inner joining of the feed table which lead to lots more data than needed.
    auth_query = db.feed.feed_owner_id == auth.user
    feed_axis_id = request.args(0)
    if feed_axis_id != None:
        feed_axis = db(db.feed_axis.id == feed_axis_id).select().first()
        feed = db((db.feed.id == feed_axis.feed_id) & (auth_query)).select().first()
        rows = db((db.feed_data.feed_axis_id == feed_axis_id)).select(db.feed_data.x, db.feed_data.y, orderby=db.feed_data.x)
    else:
        feed_axis = None
        feed = None
        rows = None
    return dict(feed=feed, feed_axis=feed_axis, rows=rows)

#Todo: admin only
def admin_dashboard():
    '''This was created for admins to see how many rows exist for 
    each axis.  It greatly helps in debugging to see where data is going.
    '''
    #this is for aggregration of the count of data records
    count = db.feed_data.x.count().with_alias('count')

    '''This is the old way i used because I knew what it was doing.
    First it gets all the feed confs
    Second it gets all the feed axes for that conf
    Last it gets the count of rows for that conf:axis    
    '''
#    feed_dct = {}
#    feeds = db(db.feed).select()
#    for feed in feeds:
#        feed_axiss = db(db.feed_axis.feed_id == feed.id).select()
#        for feed_axis in feed_axiss:
#            key = '%s:%s' % (feed.name, feed_axis.name)
#            count = db(db.feed_data.feed_axis_id == feed_axis.id).count()
#            feed_dct[key] = count
#    return feed_dct

    #does not include conf:axis with zero rows
    #rows = db((db.feed.id == db.feed_axis.feed_id) & (db.feed_axis.id == db.feed_data.feed_axis_id)).select(db.feed.name, db.feed_axis.name, count, groupby=(db.feed.name, db.feed_axis.name))
    #moved the join of the axis and data into a left outer to pull in the zero count
    rows = db(db.feed.id == db.feed_axis.feed_id).select(db.feed.name, db.feed_axis.name, count, left=db.feed_data.on(db.feed_axis.id == db.feed_data.feed_axis_id), groupby=(db.feed.name, db.feed_axis.name))
    #trying to bring in the owner
    rows = db((db.feed.id == db.feed_axis.feed_id) & (db.feed.feed_owner_id == db.auth_user.id)).select(db.feed.name, db.feed_axis.name, count, db.auth_user.email, left=db.feed_data.on(db.feed_axis.id == db.feed_data.feed_axis_id), groupby=(db.feed.name, db.feed_axis.name))
    lst = []
    for row in rows:
        a = dir(row)
        #a = row.as_json()
        a = row.as_dict()
        lst.append(a)
    return dict(lst=lst, rows=rows)


