(function() {
	"use strict";
	
	var express = require("express");
	var path = require("path");
	var logger = require("morgan");
	var cookieParser = require("cookie-parser");
	var bodyParser = require("body-parser");

	//database
	var mongoose = require("mongoose");
	//linking server commands
	var routes = require('./routes/index');
	//initialize app
	var app = express();
	
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(cookieParser());
	app.use(express.static(path.join(_dirname, 'public')));

	app.use('/', routes);

	//view engine setup
	app.set('views', path.join(_dirname, 'views'));
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'html')

	app.set('port', process.env.PORT || 3000);
	
	var server = app.listen(app.get('port'), function() {
		console.log('Server is listening on port ' + server.address().port);
	});

	module.exports = app;
}());