var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/content');
//make sure to include the database name as the 3rd input param or it won't work
var library_object = mongoose.model('library_object', library_object, 'content');


/* Get all subject names */
router.get('/', function(req, res, next) {
	library_object.find({},
		function(err, lo){
			if(err){
				res.send(err);
			}
		res.json(lo);
	});
});

/* Get all items with subject tag */
router.get('/:subject', function(req, res, next) {
	console.log(req.params.subject);
	library_object.find({
		Keywords: req.params.subject
	}, function(err, lo){
		if(err) {
			console.log(err);
			res.send(err);
		}
		res.json(lo);
	});
});

//returns all file names with the category tag and subject header
router.get('/:subject/:category', function(req, res, next) {
	library_object.find({
		Keywords: req.params.subject,
		Keywords: req.params.category
	}, function(err, lo){
		if(err){
			res.send(err);
		}
		res.json(lo);
	});
});

//returns file to open and display
router.get('/:subject/:category/:file', function(req, res, next) {
	library_object.find({
		Title: req.params.file
	}, function(err,lo){
		if(err){
			res.send(err);
		}
		res.json(lo);
	});
});

module.exports = router;
