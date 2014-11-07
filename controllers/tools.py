# -*- coding: utf-8 -*-
# try something like
def index():
    return dict(message="Tools")

def toggle_sin_wave():
    state = toggle_sin_wave_state()
    if state == True:
        message = "Enabled"
    else:
        message = "Disabled"
    return message

def state_sin_wave():
    state = get_sin_wave_state()
    return state
