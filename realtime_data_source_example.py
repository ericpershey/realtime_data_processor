# -*- coding: utf-8 -*-
'''This is an example on how to send data into the realtime_data_processor.

It will send in data for 3 axes.

If the app was installed in realtime_data_processor and you run it locally,
you can access the graph from here:
http://127.0.0.1:8000/realtime_data_processor/default/feed_graph/3
'''

import time
import math
import random
import datetime
import requests


def main():
    y = 0.0
    for x in range(128):
        x = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")
        y_a = math.sin(y)
        y_b = math.sin(y + (math.pi / 4.0))
        y_c = math.sin(y + (math.pi / 2.0))
        feed_name = 'sin_wave_over_time_in_seconds'

        axis_name = 'axis_at_0_degrees'
        url = "http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/%(feed_name)s/%(axis_name)s?x=%(x)s&y=%(y)s"
        url = url % {'feed_name':feed_name, 'axis_name':axis_name, 'x':x, 'y':y_a}
        response = requests.get(url, auth=('ep@nothing.com', '1234'))

        axis_name = 'axis_at_45_degrees'
        url = "http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/%(feed_name)s/%(axis_name)s?x=%(x)s&y=%(y)s"
        url = url % {'feed_name':feed_name, 'axis_name':axis_name, 'x':x, 'y':y_b}
        response = requests.get(url, auth=('ep@nothing.com', '1234'))

        axis_name = 'axis_at_90_degrees'
        url = "http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/%(feed_name)s/%(axis_name)s?x=%(x)s&y=%(y)s"
        url = url % {'feed_name':feed_name, 'axis_name':axis_name, 'x':x, 'y':y_c}
        response = requests.get(url, auth=('ep@nothing.com', '1234'))
        time.sleep(1)
        if y > 2 * math.pi:
            y = 0.0
        y += 0.125

if __name__ == "__main__":
    main()
