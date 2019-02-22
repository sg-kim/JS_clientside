module.exports = function(){

	var express = require('express');
	var bodyParser = require('body-parser');

	var app = express();

	app.use(express.static('public'));		//	assign location 'public' in which static files are located

	app.set('view engine', 'pug');
	app.set('views', './view_files');
	app.locals.pretty = true;

	app.use(bodyParser.urlencoded({extended:false}));

	return app;
}
