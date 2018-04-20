//server commands defined here. 
//include all URL's to visit

'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.model("db");

router.get('/', function(req, res) {
	res.render('index');
});

//router.get('/api/