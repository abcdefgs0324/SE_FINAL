'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/function', express.static(__dirname + '/function'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/static', express.static(__dirname + '/static'));

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
});

exports = module.exports = app;
