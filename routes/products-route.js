'use strict';
var express = require('express'),
    productsRoute = express.Router(),
    products = require('./products-list.js');

productsRoute.get('/', products.list);

module.exports = productsRoute;