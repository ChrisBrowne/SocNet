var express = require('express');
var app = express();

app.configure(function(){
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
});

app.get('/?', function(req, res){
	console.log('get on index');
	res.render('index.jade', {layout: false});
})

var port = 8080;
app.listen(port);
console.log('app listening on ' + port);
