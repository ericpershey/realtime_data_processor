# -*- coding: utf-8 -*-
import os
import sys
import time
import math
import datetime
import threading
import requests
from gluon.scheduler import Scheduler
scheduler = Scheduler(db)


#-START-----------------SIN WAVE TEST DATA FEED------------------
'''this is a simple table that just keeps the current value of the sin 
wave.  This really only holds one value but it cannot be stored as a global
as those are not global in each thread.
'''
db.define_table(
    'sin_wave_over_time_in_seconds',
    Field('current_value', 'float', requires=IS_NOT_EMPTY()),
)

if db(db.sin_wave_over_time_in_seconds).isempty():
    db.sin_wave_over_time_in_seconds.insert(current_value=0.0)

'''this table was created so that i could control the state of the sin
wave from the browswer making my life easier.  Should only have one row
but once again must be in the database because a global will not be 
available in all threads 
'''
db.define_table(
    'sin_wave_state',
    Field('enabled', 'boolean', requires=IS_NOT_EMPTY()),
)
if db(db.sin_wave_state).isempty():
    db.sin_wave_state.insert(enabled=False)

def get_sin_wave_state():
    '''this function gets the sin wave state'''
    row = db(db.sin_wave_state).select().first()
    return row.enabled

def toggle_sin_wave_state():
    '''this function toggles the sin wave state
    from true to false.  
    This will return the bool of the new state'''
    state = get_sin_wave_state()
    if state == False:
        state = True
    else:
        state = False
    db(db.sin_wave_state).update(enabled=state)
    db.commit()
    return state

def _sin_wave_over_time_get_value():
    '''this will get the only database record for the sin wave generator
    and update it.  It will then return the current value as a float.

    This is stored in the database in radiants and then converted to 
    the sin wave when returned.

    Note: this will query the database and we need to ensure there is no 
    problem with calling this twice at the same time, causing lock problems.'''

    row = db(db.sin_wave_over_time_in_seconds).select().first()
    current_value = row.current_value
    #lets have it start over
    if current_value > (math.pi * 2):
        new_value = 0.0
    else:
        new_value = current_value + 0.1
    #update the value
    row.update_record(current_value=new_value)
    #only really needed when called as a task
    db.commit()
    return math.sin(current_value)

def sin_wave_over_time_in_seconds():
    '''
    This is a generic data feed that will read the last value in the db and update it.

    This should be executed using @reload in a cron and it will just sit there and run.

    It will send it's data to !!!INSERT PAGE HERE!!!

    manual call here
    http://127.0.0.1:8000/realtime_data_processor/data_feed_tasks/sin_wave_over_time_in_seconds
    '''

    value = 0.0 #default
    state = get_sin_wave_state()
    the_id = threading.currentThread()
    fileobj = open('sin.log', 'a')
    fileobj.write("%s:%s:Current State:%s\n" % (the_id, datetime.datetime.now(), state))
    fileobj.close()
    if state == False:
        pass
    else:
        try:
            value = _sin_wave_over_time_get_value()
            now = datetime.datetime.now()
            response = requests.get(URL('service', 'feed_input.json', vars={'x':value, 'y':now}, scheme=True, host=True))
    
            fileobj = open('sin.log', 'a')
            fileobj.write("response code:%s\n" % response.status_code)
            fileobj.write("response json:%s\n" % response.json())
            fileobj.write("%s:%s:%s\n" % (the_id, now, value))
            fileobj.close()
        except Exception, err:
            fileobj = open('sin.log', 'a')
            fileobj.write("Error:%s\n" % (str(err)))
            fileobj.close()

    #lets return the value to show on the web page
    return dict(value=value)

#check to see if the named task is in the scheduler.
status = scheduler.task_status(db.scheduler_task.task_name == 'sin_wave')
if status == None:
    scheduler.queue_task(sin_wave_over_time_in_seconds, task_name='sin_wave', repeats=0, retry_failed= -1, period=2)
else:
    pass
    #code to modify a task as i could not find an easy way to delete them from the scheduler interface
#    for row in  db(db.scheduler_task.task_name == 'sin_wave').select():
#        print row.update_record(period=1)


#-END-----------------SIN WAVE TEST DATA FEED------------------
