var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SPELL');
var library_object = mongoose.model('library_object', library_object);


/* Get all items with subject tag */
router.get('/content/:subject', function(req, res, next) {
	library_object.find({
		Subject: req.params.subject
	}, function(err, game){
		if(err) {
			res.send(err);
		}
		res.json(library_object);
	});
});

//TODO: Determine how we are going to manage pre-defined file management headers
//returns all file names 
router.get('/content/:subject/:category', function(req, res, next) {
	library_object.find({
		//TODO: insert code for grabbing category level
		Subject: req.params.category
	}, function(err, game){
		if(err){
			res.send(err);
		}
		res.json(library_object);
	});
});

//returns file to open and display
router.get('/content/:subject/:category/:file', function(req, res, next) {
	library_object.find({
		Title: req.params.file
	}, function(err,game){
		if(err){
			res.send(err);
		}
		res.json(library_object);
	});
});

module.exports = router;
