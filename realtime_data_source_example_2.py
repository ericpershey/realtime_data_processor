# -*- coding: utf-8 -*-
import time
import math
import random
import datetime
import requests


def main():
    for x in range(64):
        x = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")
        y = random.randint(-500, 50)
        url = "http://127.0.0.1:8000/realtime_data_processor/service/feed_input.json/new_feed_int/some_ints?x=%(x)s&y=%(y)s"
        url = url % {'x':x, 'y':y}
        print "sending %s" % url
        response = requests.get(url, auth=('ep@nothing.com', '1234'))
        print "status code:%s" % response.status_code
        time.sleep(random.randint(0, 1))
    #content = response.json()

if __name__ == "__main__":
    main()
