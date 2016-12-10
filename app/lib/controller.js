var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var users = {}

app.post('/fill', function(req, res) {
	var data = req.body()
});


var addUserInfo = function(req, res) {
	var info = req.body;
	if(!users.hasOwnProperty(info.name))
		users[info.name] = {name: info.name, pwd: info.psw};
	res.send({added : true});
}


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/timeCardEntry/creds', addUserInfo);

module.exports = function(req, res) {
	app(req, res);
}