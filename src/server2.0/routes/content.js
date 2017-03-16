var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/content');
//make sure to include the database name as the 3rd input param or it won't work
var library_object = mongoose.model('library_object', library_object, 'content');
//var ideal_library = mongoose.model('ideal_library', ideal_library, 'content');

/* Get all subject names */
router.get('/', function(req, res, next) {
	//ideal_library.find({},
	library_object.find().distinct("Subjects",
		function(err, lo){
			if(err){
				res.send(err);
			}
		res.json(lo);
	});
});

/* Get all items with subject tag */
router.get('/files/:subject', function(req, res, next) {
	console.log(req.params.subject);
	//ideal_library.find({
	library_object.find({
		Subjects: req.params.subject
	}, function(err, lo){
		if(err) {
			console.log(err);
			res.send(err);
		}
		res.json(lo);
	});
});

//returns all file names with the category tag and subject header
router.get('/files/:subject/:category', function(req, res, next) {
	//ideal_library.find({
	library_object.find({
		Subjects: req.params.subject,
		Subjects: req.params.category
	}, function(err, lo){
		if(err){
			res.send(err);
		}
		res.json(lo);
	});
});

//returns file to open and display
router.get('/:subject', function(req, res, next) {
  res.render('content', { title: req.params.subject });
});

module.exports = router;
