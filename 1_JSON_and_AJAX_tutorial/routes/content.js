module.exports = function(){

	var route = require('express').Router();

	var conn = require('../externals/db.js')();

	route.get('/', function(req, res){

		res.render('content.pug', {});
	});

	//route.get('/info', function(req, res){
	route.post('/info', function(req, res){

		var table = req.body.table;

		console.log('content.js: ', table);

		var sql = 'SELECT * from ' + table;

		conn.query(sql, function(err, rows, field){
			if(err){
				console.log(err);
				res.status(500).send('Internal Server Error');
			}
			else{
				res.send(rows);
			}
		});
	});

	return route;
}

