realtime_data_processor
https://github.com/ericpershey/realtime_data_processor
=======================

A generic real-time data processor written in web2py.  

The goal is to make it much simpler to get a real-time graph of data without having to create your own system to display it.  Once you have the app started, all you need to know is how to send data to a URL.

Possible uses.
* live data feeds from simple sources that you would like to view
* utilization of a system such as a supercomputer
* status of an x10 device, senser tripping, door opening

How to use
- Start web2py with the app installed, recommended app name is realtime_data_processor(for examples)
* python web2py.py
- Create a user and login
- Create a feed and give it a "feed_name", set x and y casts and feed owner to the new user
- Go into that feed from the feed_list
- Create an axis for the data and give it an "axis_name"
- Once created, refresh the page and click on the axis name that you just created.
- This will take you to the feed_data page and it will show you the url to post the data to.
- EX: https://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/feed_name/axis_name?x=2014-11-22 10:50:42.189000&y=3.14159265 
- Note the feed_name and axis_name, this is how it knows where to send the data.
- You can now goto the graph pabe from the previous page, feed_axis_list and click graph.
- If you were to open two windows, you would see the graph update shortly after the post.

Scripted data input.
Once you have a feed defined, you can run one of the feed examples.
- login as ep@nothing.com with password 1234
- run python realtime_data_source_example.py in a seperate terminal.
- navigate to http://127.0.0.1:8000/realtime_data_processor/default/feed_graph/3

A scheduled task runs inside the app that will provide a emulated feed of data.
If you are going to provide your own data to the app, you can run it like below
* python web2py.py
If you would like to have it push in a test data feed use the below.  It will invoke the scheduler to feed in test data.
* python web2py.py -K realtime_data_processor -X
I normally have another window open with the following command at the root of web2py.
* tail -f sin.log

Note: I have found some issues running the scheduler when you try to submit forms.  If you have problems, run without the scheduler.
	
Default users 
* ep@nothing.com password of 1234
* ap@nothing.com password of 1234
* Each have thier own feeds they can see
	
scheduler.py
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
* feed_list - the list of feeds available
* feed_axis_list - the list of axes available to the feed
* feed_data - the data for a specific feed
* feed_sparkline - the data for a specific feed and a realtime sparkline 
* feed_graph - the realtime graph for the feed
* various ajax handelers
* admin_dashboard simple tool to get various stats about all the feeds
tools.py
* This is how you can enable or disable the sin wave task pushing of data
db.py
* fully repopulates the database if there is no data or the flag recreate_database is set to True
* helper functions to process data

Libraries used in addition to what web2py provides:
* prettyprint: https://github.com/padolsey/prettyPrint.js/tree/master
* sparklificator: https://github.com/INRIA/sparklificator
* metric-graphics: https://github.com/mozilla/metrics-graphics
* d3: http://d3js.org/

TODO
* websockets, may have to defer to after the project.
* switch to celery from the schdeuler
* Much code cleanup for the authorization piece
* Full authentication and authorization needs to be added with groups and permissions.
*     ep going to http://127.0.0.1:8000/realtime_data_processor/default/feed_data/3 works as it should
*     ap going to http://127.0.0.1:8000/realtime_data_processor/default/feed_data/3 should throw an access denied
* Cleaning of the database needs to be added(removing old data).
* testing, unit and functional!  
* bringing buffered data to the sparkline
* in the form to create a feed set the feed owner to the current logged in person.
* update the graph so it purges n number of rows as it moves forward

		