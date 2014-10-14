# -*- coding: utf-8 -*-

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
db.define_table("feed_conf",
    Field('name', 'string'),
    Field('x_cast', 'string'), #this will hold the name of the type the x should be case to
    Field('y_cast', 'string'), #this will hold the name of the type the y should be case to
    auth.signature,
    )

db.define_table('feed_axis',
    Field('name', 'string'),
    Field("feed_conf_id", 'reference feed_conf'),
    )

db.define_table('feed_data',
    #this really isn't the best way, these will have to be cast later based
    #on the config.  This might be fast enough and allow for much easier
    #storing of the data
    Field('x', 'string'),
    Field('y', 'string'),
    Field('feed_axis_id', 'reference feed_axis'),
    auth.signature,
    )

if db(db.feed_conf).isempty():
    db.feed_data.truncate()
    db.feed_axis.truncate()
    db.feed_conf.truncate()

    feed_conf_id = db.feed_conf.insert(name='manual_feed', x_cast='datetime', y_cast='integer')
    feed_axis_id = db.feed_axis.insert(feed_conf_id=feed_conf_id, name='00')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-10', y='0')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-11', y='2')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-12', y='7')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-13', y='3')
    feed_data_id = db.feed_data.insert(feed_axis_id=feed_axis_id, x='2014-10-14', y='2')


## after defining tables, uncomment below to enable auditing
# auth.enable_record_versioning(db)
