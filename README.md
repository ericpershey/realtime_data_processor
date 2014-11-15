realtime_data_processor
=======================

A generic real-time data processor written in web2py

A scheduled task runs inside the app that will provide a emulated feed of data.
You can run the app using the below.  It will invoke the scheduler to feed in test data.
* python web2py.py -K realtime_data_processor -X
I normally have another window open with the following command at the root of web2py.
* tail -f sin.log
	
Default users 
* ep@nothing.com password of 1234
* ap@nothing.com password of 1234
* Each have thier own feeds they can see
	
Features that work.

mostly part of scheduler.py
* Scheduler sin_wave_over_time_in_seconds data feed
* It stores it's state in the database, on or off
* It also uses the database to store the current value in the sin wave.
service.py
* scheduler.py will call and send data into feed_input using simple basic authentication
* data can be sent just like the sin wave does:
```
	                                                   ctrler   function          feed                         axis               x                                y
		http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/sin_wave_over_time_in_seconds/axis_at_0_degrees?x=2014-11-12+22%3A39%3A47.122000&y=0.93203
```
default.py
* This has controllers and views for the feed list, feed axes, and feed data
* It also has an admin interface called admin_dashboard that I use to make sure my numbers are coming out right.
tools.py
* This is how you can enable or disable the sin wave task pushing of data
db.py
* fully repopulates the database if there is no data or the flag recreate_database is set to True

TODO
* LOTS!
* I need to add a way to added feeds, axes, etc..
* The use of prettyprint.js
* Adding the realtime graphs that move when data comes in
* websockets, may have to defer to after the project.
* Full authentication and authorization needs to be added with groups and permissions.
** ep going to http://127.0.0.1:8000/realtime_data_processor/default/feed_data/3 works as it should
** ap going to http://127.0.0.1:8000/realtime_data_processor/default/feed_data/3 should throw an access denied
* Cleaning of the database needs to be added(removing old data).
* TESTING, unit and functional!  
* Cleanup and prep for deployment
		
Possible uses.
* live data feeds from simple sources that you would like to view
* usage from a supercomputer
* status of an x10 device, senser tripping, door opening
