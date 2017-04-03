#!/bin/bash

#this exits the server and database

ps -ef | grep m[o]ngod | grep -v grep | awk '{print $2}' | xargs kill 