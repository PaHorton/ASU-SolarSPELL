var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ideal_library = new Schema();

ideal_library.add({
	//Title of document
	Title: {
		type: String,
		default: '',
		unique: true,
		required: 'There must be a title'
	},
	//Physical filename
	FileName: {
		type: String,
		default: '',
		unique: true,
		required: 'There must be a filename"
	}.
	//All the various tags associated with the file
	Keywords: []
});

mongoose.model('ideal_library', ideal_library);