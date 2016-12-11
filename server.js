'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

//Mongoose Connection
mongoose.connect('mongodb://localhost/myApp');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'));
db.once('open', function() {
    console.log('Connection Established to myApp');
});

//Require Mongoose Model
require('./models/products-model.js');

//bodyParser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes
var productsRoute = require('./routes/products-route'); 
app.use('/api/products', productsRoute);


//Server Connection
app.listen(3000, function() {
    console.log('Server Listening on port 3000!');
});