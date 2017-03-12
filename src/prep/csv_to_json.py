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
jsonOutput = open("content.json", "w")
#column titles to pull information in with
columnNames = ("Title", "Filename", "Subject", "Keywords", "Coverage", "Audience", "Language", "Source", "License", "Creation_Date", "Contributor", "Added_Date")
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
