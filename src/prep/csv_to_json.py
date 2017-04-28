#This code focuses on parsing the code from CSV to JSON objects

import json
import csv

inputFile="../prep/Content.csv"

#open csv file as read in
csvInput = open(inputFile, "rU")
#open json output file as write only
jsonOutput = open("content.json", "w")
#column titles to pull information in with
columnNames = ("Timestamp", "Filename", "Title", "Subjects", "Keywords", "Coverage", "Audience", "Language", "Source", "License", "Date Created", "Contributor")
#open CSV parser with the input file, searcing the columnNames, and 
#configure it for the excel CSV format
csvReader = csv.DictReader(csvInput, columnNames, dialect = "excel")

jsonOutput.write("[\n");

#ignore title bar
csvReader.next()
#cycle through each entry and format for JSON
out = "\n\t" + ",\n\t".join([json.dumps(row, indent=4) for row in csvReader])

#ouptput to JSON file
jsonOutput.write(out)
#write tail end of file
#jsonOutput.write("\n    );\n});")

jsonOutput.write("]")

#close files
csvInput.close()
jsonOutput.close()

with open("content.json", "r") as jsonFile:
	print("Loading up the content")
	data = json.load(jsonFile)

for i in range(len(data)):
	subject = data[i]["Subjects"]
	keyword = data[i]["Keywords"]
	data[i]["Keywords"] = subject.split(", ")
	data[i]["Subjects"] = subject.split(", ")

with open("content.json", "w") as jsonFile:
	print("Json created from the csv")
	json.dump(data, jsonFile, indent=4, sort_keys=True)