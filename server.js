'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//Mongoose Connection
mongoose.connect('mongodb://localhost/myApp');
var db = mongoose.connection;
db.on('error', console.error.bind(error, 'Connection error'));
db.once('open', function() {
    console.log('Connection Established to myApp');
});

//bodyParser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Server Connection
app.listen(3000, function() {
    console.log('Server Listening on port 3000!');
});