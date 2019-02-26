
var app = require('./externals/express.js')();

app.listen(3001, function(){
	console.log('connected to 3001 port!');
});

var content = require('./routes/content')();

//	Routers

app.use('/', content);

