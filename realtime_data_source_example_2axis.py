# -*- coding: utf-8 -*-
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
        y_b = math.cos(y)
        url = "http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/sin_wave/a?x=%(x)s&y=%(y)s"
        url = url % {'x':x, 'y':y_a}
        response = requests.get(url, auth=('ep@nothing.com', '1234'))
        url = "http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/sin_wave/b?x=%(x)s&y=%(y)s"
        url = url % {'x':x, 'y':y_b}
        response = requests.get(url, auth=('ep@nothing.com', '1234'))
        time.sleep(1)
        if y > 2 * math.pi:
            y = 0.0
        y += 0.125
    #content = response.json()

if __name__ == "__main__":
    main()
