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
// import 同目錄的 bank
var BumbCase = require('./web3/BumbCase.js');

app.use(bodyParser.json());
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/function', express.static(__dirname + '/function'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/static', express.static(__dirname + '/static'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
});


app.get('/userdata', function(req, res){
    var user = req.query.id;
    bank.returnid({
        from: user
    }, function(err, rid) {
        if(!err) {
            bank.returnrecordNum({
                from: user
            }, function(err, rrecordNum) {
                if(!err) {
                    bank.returnmyPlate({
                        from: user
                    }, function(err,rmyPlate) {
                        if(!err) {
                            bank.returnotherPlate({
                                from: user
                            }, function(err, rotherPlate) {
                                if(!err) {
                                    bank.returncondition({
                                        from: user
                                    }, function(err, rcondition) {
                                        if(!err) {
                                            bank.returndate({
                                                from: user
                                            }, function(err, rdate) {
                                                if(!err) {
                                                    bank.returntime({
                                                        from: user
                                                    }, function(err, rtime) {
                                                        if(!err) {
                                                            bank.returnplace({
                                                                from: user
                                                            }, function(err, rplace) {
                                                                if(!err) {
                                                                    bank.returnotherBehavior({
                                                                        from: user
                                                                    }, function(err, rotherBehavior) {
                                                                        if(!err) {
                                                                            bank.returnmyBehavior({
                                                                                from: user
                                                                            }, function(err, rmyBehavior) {
                                                                                if(!err) {
                                                                                    bank.returnspeed({
                                                                                        from: user
                                                                                    }, function(err, rspeed) {
                                                                                        if(!err) {
                                                                                            bank.returnroad({
                                                                                                from: user
                                                                                            }, function(err, rroad) {
                                                                                                if(!err) {
                                                                                                    bank.returnsign({
                                                                                                        from: user
                                                                                                    }, function(err, rsign) {
                                                                                                        if(!err) {
                                                                                                            bank.returnbroken({
                                                                                                                from: user
                                                                                                            }, function(err, rbroken) {
                                                                                                                if(!err) {
                                                                                                                    bank.returnotherCond({
                                                                                                                        from: user
                                                                                                                    }, function(err, rotherCond) {
                                                                                                                        if(!err) {
                                                                                                                            bank.returnphoto({
                                                                                                                                from: user
                                                                                                                            }, function(err, rphoto) {
                                                                                                                                if(!err) {
                                                                                                                                    bank.returnnotes({
                                                                                                                                        from: user
                                                                                                                                    }, function(err, rnotes) {
                                                                                                                                        if(!err) {
                                                                                                                                            res.json({
                                                                                                                                                id: rid,
                                                                                                                                                recordNum: rrecordNum,
                                                                                                                                                identity: {
                                                                                                                                                    myPlate: rmyPlate,
                                                                                                                                                    otherPlate: rotherPlate
                                                                                                                                                },
                                                                                                                                                condition: {
                                                                                                                                                    date: rdate,
                                                                                                                                                    time: rtime,
                                                                                                                                                    place: rplace,
                                                                                                                                                    otherBehavior: rotherBehavior,
                                                                                                                                                    myBehavior: rmyBehavior,
                                                                                                                                                    speed: rspeed
                                                                                                                                                },
                                                                                                                                                extFactor: {
                                                                                                                                                    road: rroad,
                                                                                                                                                    sign: rsign
                                                                                                                                                },
                                                                                                                                                result: {
                                                                                                                                                    broken: rbroken,
                                                                                                                                                    otherCond: rotherCond
                                                                                                                                                },
                                                                                                                                                otherData: {
                                                                                                                                                    photo: rphoto,
                                                                                                                                                    notes: rnotes
                                                                                                                                                }
                                                                                                                                            })
                                                                                                                                        }
                                                                                                                                    })
                                                                                                                                }
                                                                                                                            })
                                                                                                                        }
                                                                                                                    })
                                                                                                                }
                                                                                                            })
                                                                                                        }
                                                                                                    })
                                                                                                }
                                                                                            })
                                                                                        }
                                                                                    })
                                                                                }
                                                                            })
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    });
});

app.post('/postdata', function(req, res) {
    var user = req.query.id;
    BumbCase.NewCase(user, req.query.myPlate, req.query.otherPlate, req.query.condition, req.query.date, req.query.time, req.query.place, req.query.otherBehavior, req.query.myBehavior, req.query.speed, req.query.road, req.query.sign, req.query.broken, req.query.otherCond, req.query.photo, req.query.notes, {
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

