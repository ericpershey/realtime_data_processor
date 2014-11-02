# -*- coding: utf-8 -*-
import os
import sys
import time
import math
import datetime

def sin_wave_over_time_in_seconds():
    '''
    This is a generic data feed that will read the last value in the db and update it.
    
    This should be executed using @reload in a cron and it will just sit there and run.
    
    It will send it's data to !!!INSERT PAGE HERE!!!
    
    http://127.0.0.1:8000/realtime_data_processor/data_feed_tasks/sin_wave_over_time_in_seconds
    '''

    while True:
        row = db(db.sin_wave_over_time_in_seconds).select().first()
        current_value = row.current_value
        if current_value > (math.pi * 2):
            new_value = 0.0
        else:
            new_value = current_value + 0.1
        row.update_record(current_value=new_value)
        value = math.sin(current_value)

        #this will be needed once converted to a task
        db.commit()

        #this is used when just calling the controller as a web page
        print value

        #this is needed to debug once we are in a task 
        fileobj = open('sin.log', 'a')
        fileobj.write("%s:%s\n" % (datetime.datetime.now(), value))
        fileobj.close()

        time.sleep(1)

    #lets return the value to show on the web page
    return dict(value=value)
