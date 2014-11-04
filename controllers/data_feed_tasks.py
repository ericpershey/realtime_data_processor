# -*- coding: utf-8 -*-
import os
import sys
import time
import math
import datetime

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
    if ENABLE_SIN_WAVE.enable == True:
        while True:
            value = _sin_wave_over_time_get_value()

            #this is used when just calling the controller as a web page
            print value

            #this is needed to debug once we are in a task 
            fileobj = open('sin.log', 'a')
            fileobj.write("%s:%s\n" % (datetime.datetime.now(), value))
            fileobj.close()

            time.sleep(1)
    else:
        #it's disabled
        pass

    #lets return the value to show on the web page
    return dict(value=value)
