'use strict';

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

app.get('/account/authencated', function (req, res) {
		res.send(200);
		return;
	if (req.session.loggedIn) {
		res.send(200);
	} else {
		res.send(401);
	}
});

var port = 8080;
app.listen(port);
console.log('app listening on ' + port);
