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
var bumbcaseModule = require('./web3/BumbCase.js');
var bumbcaseAbi = bumbcaseModule.bumbcaseAbi;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/function', express.static(__dirname + '/function'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/static', express.static(__dirname + '/static'));
app.use('/web3', express.static(__dirname + '/web3'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000);


app.post('/userdata', function(req, res){
    var user = web3.eth.accounts[0];
    var bumbcaseCon = web3.eth.contract(bumbcaseAbi);
    var bumbcase = bumbcaseCon.at(req.body.address);
    res.json({
        id: bumbcase.returnid.call(),
        recordNum: bumbcase.returnrecordNum.call(),
        identity: {
            myPlate: bumbcase.returnmyPlate.call(),
            otherPlate: bumbcase.returnotherPlate.call()
        },
        condition: {
            date: bumbcase.returndate.call(),
            time: bumbcase.returntime.call(),
            place: bumbcase.returnplace.call(),
            otherBehavior: bumbcase.returnotherBehavior.call(),
            myBehavior: bumbcase.returnmyBehavior.call(),
            speed: bumbcase.returnspeed.call()
        },
        extFactor: {
            road: bumbcase.returnroad.call(),
            sign: bumbcase.returnsign.call()
        },
        result: {
            broken: bumbcase.returnbroken.call(),
            otherCond: bumbcase.returnotherCond.call()
        },
        otherData: {
            photo: bumbcase.returnphoto.call(),
            notes: bumbcase.returnnotes.call()
        }
    });
});

app.post('/postdata', function(req, res) {
    var user = 0;
    var bumbcaseCon = web3.eth.contract(bumbcaseAbi);
    var bumbcase = bumbcaseCon.at(req.body.address);
    bumbcase.NewCase(user, req.body.identity.myPlate, req.body.identity.otherPlate, req.body.condition.date, req.body.condition.time, req.body.condition.place, req.body.condition.otherBehavior, req.body.condition.myBehavior, parseInt(req.body.condition.speed), req.body.extFactor.road, req.body.extFactor.sign, req.body.result.broken, req.body.result.otherCond, req.body.otherData.photo, req.body.otherData.notes, {from:eth.accounts[0], gas:'470000'});
});

exports = module.exports = app;

