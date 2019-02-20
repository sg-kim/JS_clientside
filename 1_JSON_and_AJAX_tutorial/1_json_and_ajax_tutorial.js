
var app = require('./externals/express.js')();

app.listen(3000, function(){
	console.log('connected to 3000 port!');
});

var content = require('./routes/content')();

//	Routers

app.use('/', content);

