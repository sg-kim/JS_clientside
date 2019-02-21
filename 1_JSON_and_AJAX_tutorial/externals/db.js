module.exports = function(){

	var mysql = require('mysql');

	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'pi',
		password: 'heybuddy01',
		database: 'study'
	});

	conn.connect();

	return conn;
}

