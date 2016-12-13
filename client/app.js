'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var path = require('path');

// import 同目錄的 eventEmitter.js
var eventEmitter = require('./web3/eventEmitter.js');
// import 同目錄的 web3.js
var web3 = require('./web3/web3.js');
var eth = web3.eth;
// import 同目錄的 bumbcase
var bumbcase = require('./web3/BumbCase.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/function', express.static(__dirname + '/function'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/static', express.static(__dirname + '/static'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

/*
http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
});
*/
http.listen(3000);


app.get('/userdata', function(req, res){
    var user = web3.eth.accounts[0];
    res.json({
        id: bumbcase.returnid,
        recordNum: bumbcase.returnrecordNum,
        identity: {
            myPlate: bumbcase.returnmyPlate,
            otherPlate: bumbcase.returnotherPlate
        },
        condition: {
            date: bumbcase.returndate,
            time: bumbcase.returntime,
            place: bumbcase.returnplace,
            otherBehavior: bumbcase.returnotherBehavior,
            myBehavior: bumbcase.returnmyBehavior,
            speed: bumbcase.returnspeed
        },
        extFactor: {
            road: bumbcase.returnroad,
            sign: bumbcase.returnsign
        },
        result: {
            broken: bumbcase.returnbroken,
            otherCond: bumbcase.returnotherCond
        },
        otherData: {
            photo: bumbcase.returnphoto,
            notes: bumbcase.returnnotes
        }
    });
});

app.post('/postdata', function(req, res) {
    var user = web3.eth.accounts[0];
    bumbcase.NewCase(user, req.body.identity.myPlate, req.body.identity.otherPlate, req.body.condition, req.body.condition.date, req.body.condition.time, req.body.condition.place, req.body.condition.otherBehavior, req.body.condition.myBehavior, req.body.condition.speed, req.body.extFactor.road, req.body.extFactor.sign, req.body.result.broken, req.body.result.otherCond, req.body.otherData.photo, req.body.otherData.notes, {
        from: user,
        gas: 4600000
    }, function(err, txhash) {
        if(!err) {
            eventEmitter.once('NewCaseEvent:' + user, function(eventPayload) {
                eventPayload['txhash'] = txhash;
                res.json(eventPayload);
            })
        }else {
            console.log(err);
            res.status(500).json(err);
        }
    })

});

exports = module.exports = app;

