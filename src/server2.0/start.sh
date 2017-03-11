#!/bin/bash

#this starts the mongodb database and the website
#to import file, run "mongoimport --db SPELL --collection documents <json file> --jsonArray"

case "$(pidof mongod | wc -w)" in

0) echo "Starting MongoDB..."
	sudo mongod &
	;;

1) echo "MongoDB already running..."
	;;

*) echo "Removed extra instances of Mongo..."
	kill $(pidof mongod | awk '{print $1}')
	;;

esac

npm install
npm start