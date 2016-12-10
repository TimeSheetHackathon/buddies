var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.post('/fill', function(req, res) {
	
});

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true}));

module.exports = function(req, res) {
	app(req, res);
}