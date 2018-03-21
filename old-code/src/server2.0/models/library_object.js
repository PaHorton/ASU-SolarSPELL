var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var library_object = new Schema();

//defines format of each content entry
library_object.add({
	//title of document
	Title: {
		type: String,
		default: '',
		unique: true,
		required: 'There must be a title'
	},
	//physical file name
	FileName: {
		type: String,
		default: '',
		unique: true,
		required: 'There must be a filename'
	},
	//subjects linked to the file
	//TODO: get better descriptions of each area
	Subjects: [String] /*[
			Subject: String,
			Category: String,
			SubCategory: String
	]*/,
	//filled with uncontrolled vocabulary
	//used for searchability
	Keywords: [],
	//geographic/national coverage of the topic
	Coverage: [],
	//Student or Teacher?
	Audience: String,
	//language used in file
	Language: String,
	//source of file
	Source: String,
	//License of Document
	License: String,
	//Date of file creation (dd/mm/yyyy)
	Creation_Date: String,
	//ASUrite ID of who added the file to the database pool
	Contributor: String,
	//Date added to database pool (dd/mm/yyyy)
	Added_Date: String
});

mongoose.model('library_object', library_object);