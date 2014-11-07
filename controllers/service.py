# -*- coding: utf-8 -*-
from gluon.serializers import json
#from gluon.tools import Service
#service = Service()

def index():
    dct = {'services':'are up!'}
    #response.generic_patterns = ['*.json']
    return dct

#@service.json
def feed_input():
    feed_name = request.args(0)
    axis_name = request.args(1)
    feed_vars = request.vars
    return locals()
