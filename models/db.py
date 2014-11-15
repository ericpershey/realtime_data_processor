# -*- coding: utf-8 -*-
import os
import sys
import datetime
import traceback

def extract_traceback(include_time=True):
    """Extract a traceback, format it nicely and return it"""
    if include_time:
        currenttime = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")
    else:
        currenttime = ''
    (exc_cls, exc, tracbk) = sys.exc_info()
    exc_str = traceback.format_exception_only(exc_cls, exc)[0]
    tracebacklst = []
    tracebacklst.append(" ".join(("-" * 32, 'START TRACEBACK', "-" * 30)))
    tracebacklst.append("    Exception  : %s" % (exc_str.strip()))
    tracebacklst.append("    Time       : %s" % currenttime)
    tracebacklst.append("-" * 80)
    stack = traceback.format_tb(tracbk)
    indent = "  "
    for stackpiece in stack:
        stackpiece = stackpiece.strip()
        stackpiece_lst = stackpiece.split(os.linesep)
        for stack_item in stackpiece_lst:
            tracebacklst.append("%s%s|%s" % (indent, currenttime, stack_item))
        #stackpiece = stackpiece.replace(os.linesep, "%s%s%s|" % \
        #                                (os.linesep, indent, currenttime))
        #tracebacklst.append("%s%s|%s" % (indent, currenttime, stackpiece))
    tracebacklst.append(" ".join(("-" * 32, 'END TRACEBACK', "-" * 32)))
    return tracebacklst

#########################################################################
## This scaffolding model makes your app work on Google App Engine too
## File is released under public domain and you can use without limitations
#########################################################################

## if SSL/HTTPS is properly configured and you want all HTTP requests to
## be redirected to HTTPS, uncomment the line below:
# request.requires_https()

if not request.env.web2py_runtime_gae:
    ## if NOT running on Google App Engine use SQLite or other DB
    db = DAL('sqlite://storage.sqlite', pool_size=1, check_reserved=['all'])
else:
    ## connect to Google BigTable (optional 'google:datastore://namespace')
    db = DAL('google:datastore+ndb')
    ## store sessions and tickets there
    session.connect(request, response, db=db)
    ## or store session in Memcache, Redis, etc.
    ## from gluon.contrib.memdb import MEMDB
    ## from google.appengine.api.memcache import Client
    ## session.connect(request, response, db = MEMDB(Client()))

## by default give a view/generic.extension to all actions from localhost
## none otherwise. a pattern can be 'controller/function.extension'
response.generic_patterns = ['*'] if request.is_local else []

## (optional) optimize handling of static files
# response.optimize_css = 'concat,minify,inline'
# response.optimize_js = 'concat,minify,inline'
## (optional) static assets folder versioning
# response.static_version = '0.0.0'
#########################################################################
## Here is sample code if you need for
## - email capabilities
## - authentication (registration, login, logout, ... )
## - authorization (role based authorization)
## - services (xml, csv, json, xmlrpc, jsonrpc, amf, rss)
## - old style crud actions
## (more options discussed in gluon/tools.py)
#########################################################################

from gluon.tools import Auth, Service, PluginManager

auth = Auth(db)
service = Service()
plugins = PluginManager()

## create all tables needed by auth if not custom tables
auth.define_tables(username=False, signature=False)

## configure email
mail = auth.settings.mailer
mail.settings.server = 'logging' if request.is_local else 'smtp.gmail.com:587'
mail.settings.sender = 'you@gmail.com'
mail.settings.login = 'username:password'

## configure auth policy
auth.settings.registration_requires_verification = False
auth.settings.registration_requires_approval = False
auth.settings.reset_password_requires_verification = True

## if you need to use OpenID, Facebook, MySpace, Twitter, Linkedin, etc.
## register with janrain.com, write your domain:api_key in private/janrain.key
#from gluon.contrib.login_methods.janrain_account import use_janrain
#use_janrain(auth, filename='private/janrain.key')

#Table Definitions
db.define_table("feed",
    Field('name', 'string', unique=True, requires=IS_NOT_EMPTY()),
    Field('x_cast', 'string', requires=IS_NOT_EMPTY()), #this will hold the name of the type the x should be cast to
    Field('y_cast', 'string', requires=IS_NOT_EMPTY()), #this will hold the name of the type the y should be cast to
    Field("feed_owner_id", 'reference auth_user'),
    auth.signature,
    )

db.define_table('feed_axis',
    Field('name', 'string', requires=IS_NOT_EMPTY()),
    Field("feed_id", 'reference feed', requires=IS_NOT_EMPTY()),
    )

db.define_table('feed_data',
    #this really isn't the best way, these will have to be cast later based
    #on the config.  This might be fast enough and allow for much easier
    #storing of the data
    Field('x', 'string', requires=IS_NOT_EMPTY()),
    Field('y', 'string', requires=IS_NOT_EMPTY()),
    Field('feed_axis_id', 'reference feed_axis', requires=IS_NOT_EMPTY()),
    Field('entry_time', 'datetime', default=datetime.datetime.now())
    #auth.signature,
    )

class ExceptionNotFound(Exception):
    pass

class ExceptionToMany(Exception):
    pass

class ExceptionBadCast(Exception):
    pass

class ExceptionBadValue(Exception):
    pass

def get_axis_form(feed_id):
    '''this returns the form axis'''
    db.feed_axis.feed_id.default = feed_id
    form = SQLFORM(db.feed_axis, fields=['name', 'feed_id'], _id='feed_axis_list_form')
    return form

def get_feed_axis(feed_name, axis_name):
    '''This will return the axis for the selected feed_name and axis_name.
    If it cannot find a feed or axis, it will raise a ExceptionNotFound
    '''
    feed = db(db.feed.name == feed_name).select().first() #feed.name is unique
    if feed == None:
        raise ExceptionNotFound("Feed %s not found" % (feed_name))
    feed_axis_query = db((db.feed_axis.name == axis_name) & (db.feed_axis.feed_id == feed.id))
    #eric look here:
    #http://stackoverflow.com/questions/8054665/multi-column-unique-constraint-with-web2py
    if feed_axis_query.count() > 1:
        #now prevented in the ajax form to as axes
        raise ExceptionToMany("Programmatic constrain for unique feed and axis_name failed!  Duplicate detected for conf:%s, axis:%s" % (feed_name, axis_name))
    else:
        feed_axis = feed_axis_query.select().first()
        if feed_axis == None:
            raise ExceptionNotFound("Axis %s for feed %s not found" % (axis_name, feed_name))
    return feed, feed_axis

def get_cast_func(cast_str):
    '''this gets the real casting function'''
    if cast_str == 'datetime':
        func = lambda d: datetime.datetime.strptime(d, '%Y-%m-%d %H:%M:%S.%f')
    elif cast_str == 'float':
        func = float
    elif cast_str == 'int':
        func = int
    else:
        raise ExceptionBadCast("%s is not a valid axis cast." % cast_str)
    return func

def parse_vars(feed, request_vars):
    '''given data from a request, parse the x and y and cast them to the required type
    and throw errors if they are not correct'''
    x_func = get_cast_func(feed.x_cast)
    y_func = get_cast_func(feed.y_cast)
    x = request_vars.x
    y = request_vars.y
    if x is not None:
        try:
            x = x_func(x)
        except ValueError, err:
            raise ExceptionBadValue("Casting x value %s to %s is not valid.  Error:%s" % (x, feed.x_cast, str(err)))
    else:
        raise ExceptionBadValue("Value x is invalid or missing:|%s|" % (x))
    if y is not None:
        try:
            y = y_func(y)
        except ValueError, err:
            raise ExceptionBadValue("Casting y value %s to %s is not valid.  Error:%s" % (y, feed.y_cast, str(err)))
    else:
        raise ExceptionBadValue("Value y is invalid or missing:|%s|" % (x))
    return x, y

#this is how I load the database to test it with two users.
recreate_database = False

if db(db.feed).isempty() or recreate_database:
    #help on auth_user
    #http://web2py.com/books/default/chapter/29/09/access-control
    db.auth_user.truncate()
    #password = db.auth_user.password.validate('1234')[0],
    #password = CRYPT(digest_alg='sha512', salt=True)('1234')
    password = str(CRYPT(key=auth.settings.hmac_key)('1234')[0])
    db.auth_user.insert(password=password, email='ep@nothing.com',
        first_name='e', last_name='p')
    db.auth_user.insert(password=password, email='ap@nothing.com',
        first_name='a', last_name='p')
    db.commit()

    #create some users and assign them to feeds.
    feed_owner_a = db(db.auth_user.email == 'ep@nothing.com').select().first()
    feed_owner_b = db(db.auth_user.email == 'ap@nothing.com').select().first()
    db.commit()

    #clear the current data
    db.feed_data.truncate()
    db.feed_axis.truncate()
    db.feed.truncate()

    #create the feed, axis and some data
    feed_id = db.feed.insert(name='manual_feed_a', x_cast='datetime', y_cast='integer', feed_owner_id=feed_owner_a.id)
    feed_axis_id = db.feed_axis.insert(feed_id=feed_id, name='axis_a00')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-10', y='0')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-11', y='2')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-12', y='7')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-13', y='3')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-14', y='2')

    feed_id = db.feed.insert(name='manual_feed_b', x_cast='datetime', y_cast='integer', feed_owner_id=feed_owner_a.id)
    feed_axis_id = db.feed_axis.insert(feed_id=feed_id, name='axis_b00')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-10', y='40')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-11', y='72')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-12', y='31')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-13', y='73')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-14', y='72')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-14', y='82')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-14', y='32')

    feed_id = db.feed.insert(name='sin_wave_over_time_in_seconds', x_cast='datetime', y_cast='float', feed_owner_id=feed_owner_a.id)
    feed_axis_id = db.feed_axis.insert(feed_id=feed_id, name='axis_at_0_degrees')
    feed_axis_id = db.feed_axis.insert(feed_id=feed_id, name='axis_at_45_degrees')
    feed_axis_id = db.feed_axis.insert(feed_id=feed_id, name='axis_at_90_degrees')

    feed_id = db.feed.insert(name='manual_feed_aj', x_cast='datetime', y_cast='integer', feed_owner_id=feed_owner_b.id)
    feed_axis_id = db.feed_axis.insert(feed_id=feed_id, name='axis_aj_00')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-10', y='1')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-11', y='3')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-12', y='2')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-13', y='4')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-14', y='3')
    feed_axis_id = db.feed_axis.insert(feed_id=feed_id, name='axis_aj_01')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-10', y='9')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-11', y='8')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-12', y='7')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-13', y='6')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-14', y='5')

## after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)


