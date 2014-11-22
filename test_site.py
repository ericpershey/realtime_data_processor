#/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import requests

def test_url(base_path, correct_code, url, user, password):
    '''This will check to make sure the url returns the correct code specified'''
    full_url = base_path + url
    response = requests.get(full_url, auth=(user, password))
    code = response.status_code
    try:
        assert code == correct_code, "incorrect code"
    except AssertionError, err:
        print "%-16s:%4s - Error :%s" % (user, password, full_url)
        print "    Result Code %s != Correct Code: %s" % (code, correct_code)
#        fileobj = open("_blah_.html", 'w')
#        fileobj.write(response.content)
#        fileobj.close()
    else:
        print "%-16s:%4s - Good  :%s" % (user, password, full_url)

def test_site(base_path):
    '''This will run a series of test on the base_path for the 
    realtime_data_processor web2py app'''
    urls = []
    #correct code, url, user, password

    user = 'ep@nothing.com'
    password = '1234'
    urls.append((200, '/default/feed_list', user, password))
    urls.append((200, '/default/feed_axis_list', user, password))
    urls.append((200, '/default/feed_data', user, password))
    urls.append((200, '/service/feed_cache.json/3', user, password))
    urls.append((200, '/default/feed_axis_list/3', user, password))
    #just last 12 hours of data
    urls.append((200, '/service/feed_live_from_data_id.json/sin_wave_over_time_in_seconds/axis_at_0_degrees/250', user, password))
    #specify an age in hours
    urls.append((200, '/service/feed_live_from_data_id.json/sin_wave_over_time_in_seconds/axis_at_0_degrees/250/168', user, password))
    #just last 12 hours of data
    urls.append((200, '/service/feed_cache.json/10', user, password))
    #specify an age in hours
    urls.append((200, '/service/feed_cache.json/10/168', user, password))

    user = None
    password = None
    #most of these will return the login page
    urls.append((200, '/default/feed_list', user, password))
    urls.append((200, '/default/feed_axis_list', user, password))
    urls.append((200, '/default/feed_data', user, password))
    urls.append((403, '/service/feed_cache.json/3', user, password))
    urls.append((200, '/default/feed_axis_list/3', user, password))

    user = 'ap@nothing.com'
    password = '1234'
    urls.append((200, '/default/feed_list', user, password))
    urls.append((200, '/default/feed_axis_list', user, password))
    urls.append((200, '/default/feed_data', user, password))
    urls.append((403, '/service/feed_cache.json/3', user, password))
    #for some reason in the browser it returns 403, but with requests the 200 with the login page
    #urls.append((403, '/default/feed_axis_list.load/3', user, password))

    #(200, '/service/feed_input.json/new_feed_int/some_ints?x=2014-11-21%2022:40:00.572000&z=0.428538413447', user, password)

    for args in urls:
        test_url(base_path, *args)

if __name__ == "__main__":
    try:
        base_path = sys.argv[1]
    except IndexError:
        sys.stderr.write("please provide the full base path to the web2py app.\n")
        sys.stderr.write("Ex: python test_site.py http://127.0.0.1:8000/realtime_data_processor\n")
        sys.exit(1)
    else:
        test_site(base_path)
