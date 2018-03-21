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

wget -q --tries=10 --timeout=20 --spider http://google.com
if [[ $? -eq 0 ]]; then
	wget "https://docs.google.com/spreadsheets/d/1UbhXmMjnYqLmDziriUUYCaNvC1qlf5VicWG2rMh7pr0/export?format=csv" -O "../prep/Content.csv"
	python ../prep/csv_to_json.py
fi

mongoimport --db content --collection content --drop --file ../prep/content.json --jsonArray

mongoimport --db content --collection headers --drop --file ../prep/headers.json --jsonArray

#trap `ps -ef | grep m[o]ngod | grep -v grep | awk '{print $2}' | xargs kill` 0

npm install
npm start