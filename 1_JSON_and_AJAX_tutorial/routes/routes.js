
module.exports = function(){

	var route = require('express').Router();

	route.get('/', function(req, res){

		res.render('content.pug', {});
	});

	route.get('/info', function(req, res){
	});

	return route;
}

