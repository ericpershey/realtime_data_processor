# -*- coding: utf-8 -*-
# try something like
def index():
    return dict(message="hello from ui.py")



@auth.requires_login()
def feed_conf():
    '''this will display the status of a feed or show the list of available 
    feeds'''
    auth_query = db.feed_conf.feed_owner_id == auth.user
    rows = db(auth_query).select()
    return dict(rows=rows)

@auth.requires_login()
def feed_axis():
    auth_query = db.feed_conf.feed_owner_id == auth.user
    count = db.feed_data.x.count().with_alias('count')
    feed_conf_id = request.args(0)
    feed_conf = db(db.feed_conf.id == feed_conf_id).select().first()
    #this was done without count
    #            this isolates it to the axis                auth            this isolates it to join  
    #rows = db((db.feed_axis.feed_conf_id == feed_conf_id) & (auth_query) & (db.feed_axis.feed_conf_id == db.feed_conf.id)).select(db.feed_axis.ALL, db.feed_conf.ALL)
    #with count
    rows = db((db.feed_axis.feed_conf_id == feed_conf_id) & (auth_query) & (db.feed_axis.feed_conf_id == db.feed_conf.id)).select(db.feed_axis.ALL, db.feed_conf.ALL, count, left=db.feed_data.on(db.feed_axis.id == db.feed_data.feed_axis_id), groupby=(db.feed_conf.name, db.feed_axis.name))
    return dict(feed_conf=feed_conf, rows=rows)

@auth.requires_login()
def feed_data():
    #this auth query caused an inner joining of the feed_conf table which lead to lots more data than needed.
    auth_query = db.feed_conf.feed_owner_id == auth.user
    feed_axis_id = request.args(0)
    feed_axis = db(db.feed_axis.id == feed_axis_id).select().first()
    feed_conf = db((db.feed_conf.id == feed_axis.feed_conf_id) & (auth_query)).select().first()
    rows = db((db.feed_data.feed_axis_id == feed_axis_id)).select(db.feed_data.x, db.feed_data.y, orderby=db.feed_data.x)
    return dict(feed_conf=feed_conf, feed_axis=feed_axis, rows=rows)

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
#    feed_confs = db(db.feed_conf).select()
#    for feed_conf in feed_confs:
#        feed_axiss = db(db.feed_axis.feed_conf_id == feed_conf.id).select()
#        for feed_axis in feed_axiss:
#            key = '%s:%s' % (feed_conf.name, feed_axis.name)
#            count = db(db.feed_data.feed_axis_id == feed_axis.id).count()
#            feed_dct[key] = count
#    return feed_dct

    #does not include conf:axis with zero rows
    #rows = db((db.feed_conf.id == db.feed_axis.feed_conf_id) & (db.feed_axis.id == db.feed_data.feed_axis_id)).select(db.feed_conf.name, db.feed_axis.name, count, groupby=(db.feed_conf.name, db.feed_axis.name))
    #moved the join of the axis and data into a left outer to pull in the zero count
    rows = db(db.feed_conf.id == db.feed_axis.feed_conf_id).select(db.feed_conf.name, db.feed_axis.name, count, left=db.feed_data.on(db.feed_axis.id == db.feed_data.feed_axis_id), groupby=(db.feed_conf.name, db.feed_axis.name))
    #trying to bring in the owner
    rows = db((db.feed_conf.id == db.feed_axis.feed_conf_id) & (db.feed_conf.feed_owner_id == db.auth_user.id)).select(db.feed_conf.name, db.feed_axis.name, count, db.auth_user.email, left=db.feed_data.on(db.feed_axis.id == db.feed_data.feed_axis_id), groupby=(db.feed_conf.name, db.feed_axis.name))
    lst = []
    for row in rows:
        a = dir(row)
        #a = row.as_json()
        a = row.as_dict()
        lst.append(a)
    return dict(lst=lst, rows=rows)


