module.exports = function(){

	var express = require('express');
	var bodyParser = require('body-parser');

	var app = express();

	app.set('view engine', 'pug');
	app.set('views', './view_files');
	app.locals.pretty = true;

	app.use(bodyParser.urlencoded({extended:false}));

	return app;
}
