'use strict';

var express = require('express'),
    app = express(),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')
    expressValidator = require('express-validator'),
    expressSession = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');

//Mongoose Connection
mongoose.connect('mongodb://localhost/myApp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
    console.log('Connection Established to myApp');
});

//Require Mongoose Model
require('./models/products-model.js');

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession())

//Routes
var productsRoute = require('./routes/products-route'); 
app.use('/api/products', productsRoute);

//Client
app.use('/', express.static('client'));
app.use('/client-models', express.static('client/models'));
app.use('/bower_components', express.static('bower_components'));


//Server Connection
app.listen(3000, function() {
    console.log('Server Listening on port 3000!');
});