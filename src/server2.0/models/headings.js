var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var library_object = new Schema();

headings.add({
	Math: [String],
	Science: [String],
	Environment: [String],
	Health
}

mongoose.model('headings', headings);