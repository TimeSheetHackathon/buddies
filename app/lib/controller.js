var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var users = {};
var configs = {};

app.post('/fill', function(req, res) {
	var data = req.body()
});


var addUserInfo = function(req, res) {
	var info = req.body;
	if(!users.hasOwnProperty(info.name)){
		users[info.name] = {name: info.name, pwd: info.psw};
		configs[info.name] = undefined;
	}
	res.send({hasDefault : configs[info.name] != undefined});
}


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.post('/timeCardEntry/creds', addUserInfo);

module.exports = function(req, res) {
	app(req, res);
}