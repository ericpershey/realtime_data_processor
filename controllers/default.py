# -*- coding: utf-8 -*-

def index():
    return dict(message="Welcome to the Realtime Data Processor")

@auth.requires_login()
def ajax_feed_delete():
    '''this will delete the feed record that only the user has access to'''
    feed_id = request.args(0)
    auth_query = db.feed.feed_owner_id == auth.user
    db((db.feed.id == feed_id) & auth_query).delete()
    db.commit()
    return {}

@auth.requires_login()
def feed_list():
    '''this will display the status of a feed or show the list of available 
    feeds'''
    db.feed.feed_owner_id.default = auth.user.id
    form = SQLFORM(db.feed)

    if form.accepts(request, session):
        response.flash = "Created new Feed"
    elif form.errors:
        response.flash = "Errors:%s" % BEAUTIFY(form.errors)
    else:
        response.flash = "Please fill out the form at add a feed"


    auth_query = db.feed.feed_owner_id == auth.user
    rows = db(auth_query).select()

    return dict(rows=rows, form=form)

@auth.requires_login()
def ajax_axis_add():
    '''This will handle the adding of axes via ajax
    '''
    try:
        auth_query = db.feed.feed_owner_id == auth.user
        feed_id = int(request.args(0))
        feed = db((db.feed.id == feed_id) & auth_query).select().first()
        if not feed:
            raise HTTP(403, "No feed found for selected input")
        #This is kind of inefficient but checks to make sure there isn't one already in the database.
        feed_axis = db((db.feed_axis.name == request.vars['name']) & (db.feed_axis.feed_id == feed.id)).select().first()
        if feed_axis is None:
            form = get_axis_form(feed_id)
            if form.accepts(request.vars):
                feed_axis = db(db.feed_axis.name == request.vars['name']).select().first()
                response.flash = "Accepted"
                feed_url = A(feed_axis.name, _href=URL('feed_data/%s' % (feed_axis.id))),
                row = TR(TD(feed.name), TD(feed_url), TD(0)) #hardcoding it to zero as it will only add one if it doesn't exist
            elif form.errors:
                response.flash = "Errors:%s" % BEAUTIFY(form.errors)
                row = TR()
            else:
                response.flash = "Failed"
                row = TR()
        else:
            response.flash = "Feed %s + Axis %s is already in the database" % (feed.name, feed_axis.name)
            row = TR()

        row = row + TR(_id='feed_axis_list_form_result')

    except Exception, err:
        print '\n'.join(extract_traceback())
    return dict(row=row)

@auth.requires_login()
def ajax_axis_delete():
    '''this will delete axis the record that only the user has access to'''
    auth_query = db.feed.feed_owner_id == auth.user
    #get the feed first with auth
    row = db((db.feed.id == db.feed_axis.feed_id) & (db.feed_axis.id == request.args(0)) & (auth_query)).select().first()
    if row == None:
        raise HTTP(403, "No feed found for selected input")

    #now get the row to delete 
    #rows = db((db.feed_axis.id == request.args(0)) & (db.feed_axis.feed_id == row.feed.id)).select()
    db((db.feed_axis.id == request.args(0)) & (db.feed_axis.feed_id == row.feed.id)).delete()
    db.commit()
    return {}


@auth.requires_login()
def feed_axis_list():
    auth_query = db.feed.feed_owner_id == auth.user
    count = db.feed_data.x.count().with_alias('count')
    feed_id = request.args(0)
    feed = db((db.feed.id == feed_id) & (auth_query)).select().first()
    if not feed:
        raise HTTP(403, "No feed found for selected input")

    #this was done without count1
    #            this isolates it to the axis                auth            this isolates it to join
    #rows = db((db.feed_axis.feed_id == feed_id) & (auth_query) & (db.feed_axis.feed_id == db.feed.id)).select(db.feed_axis.ALL, db.feed.ALL)
    #with count
    rows = db((db.feed_axis.feed_id == feed_id) & (auth_query) & (db.feed_axis.feed_id == db.feed.id)).select(db.feed_axis.ALL, db.feed.ALL, count, left=db.feed_data.on(db.feed_axis.id == db.feed_data.feed_axis_id), groupby=(db.feed.name, db.feed_axis.name))
    form = get_axis_form(feed_id)
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
        #rows = db((db.feed_data.feed_axis_id == feed_axis_id)).select(db.feed_data.x, db.feed_data.y, orderby=db.feed_data.x)
    else:
        feed_axis = None
        feed = None
    return dict(feed=feed, feed_axis=feed_axis)

@auth.requires_login()
def feed_sparkline():
    '''mainly a copy of feed_data'''
    auth_query = db.feed.feed_owner_id == auth.user
    feed_axis_id = request.args(0)
    if feed_axis_id != None:
        feed_axis = db(db.feed_axis.id == feed_axis_id).select().first()
        feed = db((db.feed.id == feed_axis.feed_id) & (auth_query)).select().first()
        #rows = db((db.feed_data.feed_axis_id == feed_axis_id)).select(db.feed_data.x, db.feed_data.y, orderby=db.feed_data.x)
    else:
        feed_axis = None
        feed = None

    return dict(feed=feed, feed_axis=feed_axis)

@auth.requires_login()
def feed_graph():
    '''This will show the graph for a feed (axes)'''
    auth_query = db.feed.feed_owner_id == auth.user
    feed_id = request.args(0)
    if feed_id:
        feed_axis_ids = []
        feed = db((db.feed.id == feed_id) & (auth_query)).select().first()
        rows = db(db.feed_axis.feed_id == feed.id).select()
        for row in rows:
            #dangerous casting here as this might have problems with MANY axis, not likely but notable
            feed_axis_ids.append(int(row.id))
        #rows = db((db.feed_data.feed_axis_id == feed_axis_id)).select(db.feed_data.x, db.feed_data.y, orderby=db.feed_data.x)
    else:
        feed_axis_ids = []
        feed = None

    return dict(feed=feed, feed_axis_ids=feed_axis_ids)

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



def user():
    """
    exposes:
    http://..../[app]/default/user/login
    http://..../[app]/default/user/logout
    http://..../[app]/default/user/register
    http://..../[app]/default/user/profile
    http://..../[app]/default/user/retrieve_password
    http://..../[app]/default/user/change_password
    http://..../[app]/default/user/manage_users (requires membership in
    use @auth.requires_login()
        @auth.requires_membership('group name')
        @auth.requires_permission('read','table name',record_id)
    to decorate functions that need access control
    """
    return dict(form=auth())
