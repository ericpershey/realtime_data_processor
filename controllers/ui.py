# -*- coding: utf-8 -*-
# try something like
def index():
    return dict(message="hello from ui.py")

@auth.requires_login()
def feed_status():
    '''this will display the status of a feed or show the list of available 
    feeds'''
    feed_id = request.args(0)
    if feed_id == None:
        #display a list for the user to view
        pass
        rows = db(db.feed_conf.feed_owner == auth.user).select()
    else:
        rows = db(db.feed_axis.feed_conf_id == feed_id).select()
    return dict(feed_id=feed_id, rows=rows)
