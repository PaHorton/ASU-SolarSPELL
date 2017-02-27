#This code focuses on parsing the code from CSV to JSON objects

import json
import csv

#prompt for data to parse
inputFile = raw_input("Input file path to CSV file: (default: Workbook1.csv)\n")
#default file path
if(inputFile == ''):
	inputFile = "Workbook1.csv"

#open csv file as read in
csvInput = open(inputFile, "rU")
#open json output file as write only
jsonOutput = open("seed.js", "w")
#column titles to pull information in with
columnNames = ("Title", "Filename", "Subject", "Keywords", "Coverage", "Audience", "Language", "Source", "License", "Creation_Date", "Contributor", "Added_Date")
#open CSV parser with the input file, searcing the columnNames, and 
#configure it for the excel CSV format
csvReader = csv.DictReader(csvInput, columnNames, dialect = "excel")

#create head of database seed file
jsonOutput.write("'use strict';\n")
jsonOutput.write("var library_object = require('../models/library_object.js');\n")
jsonOutput.write("library_object.find({}).remove(function() {\n    library_object.create(\n")

#ignore title bar
csvReader.next()
#cycle through each entry and format for JSON
out = "\n\t" + ",\n\t".join([json.dumps(row, indent=8) for row in csvReader])

#ouptput to JSON file
jsonOutput.write(out)
#write tail end of file
jsonOutput.write("\n    );\n});")

#close files
csvInput.close()
jsonOutput.close()
