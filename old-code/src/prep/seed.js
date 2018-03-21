'use strict';
var library_object = require('../models/library_object.js');
library_object.find({}).remove(function() {
    library_object.create(

	{
        "License": "None", 
        "Language": "English", 
        "Title": "Test Title 1", 
        "Added_Date": "Today", 
        "Filename": "test1.pdf", 
        "Source": "Me", 
        "Audience": "Student", 
        "Contributor": "nshantz", 
        "Coverage": "Local", 
        "Keywords": "Funsies", 
        "Creation_Date": "Today", 
        "Subject": "Math, Chemistry"
},
	{
        "License": "none", 
        "Language": "English", 
        "Title": "Test Title 2", 
        "Added_Date": "Today", 
        "Filename": "test2.pdf", 
        "Source": "Me", 
        "Audience": "Teacher", 
        "Contributor": "nshantz", 
        "Coverage": "Local", 
        "Keywords": "Funsies", 
        "Creation_Date": "Yesterday", 
        "Subject": "Physics, History"
}
    );
});