# -*- coding: utf-8 -*-
# try something like
def index():
    return dict(message="Tools")

def toggle_sin_wave():
    #NOTE THIS DOES NOT WORK!!!
    if ENABLE_SIN_WAVE.enable == False:
        ENABLE_SIN_WAVE.enable = True
        message = "Enabled"
    else:
        ENABLE_SIN_WAVE.enable = False
        message = "Disabled"
    return message
