#!/bin/bash

#this starts the mongodb database and the website
#to import file, run "mongoimport --db SPELL --collection documents <json file> --jsonArray"

PCOUNT=`ps -ef | grep -v grep | grep m[o]ngod | wc -l`

if [ $PCOUNT -gt 1 ]; then
	echo "Removed extra instances of Mongo..."
	ps -ef | grep m[o]ngod | grep -v grep | awk '{print $2}' | xargs kill

else
	if [ $PCOUNT -eq 0 ]; then
		echo "Starting MongoDB..."
		mongod --fork --logpath ./logs/mongodb.log
	else
		echo "MongoDB already running..."
	fi
fi



#case "$(pgrep -f "mongod" | wc -w)" in

#case "$PCOUNT" in

#0) echo "Starting MongoDB..."
#	mongod --fork --logpath ./logs/mongodb.log
#	;;

#1) echo "MongoDB already running..."
#	;;

#*) echo "Removed extra instances of Mongo..."
#	kill $(pgrep -f "mongod" | awk '{print $1}')
#	;;

#esac

mongoimport --db SPELL --collection documents ../prep/content.json --jsonArray

npm install
npm start