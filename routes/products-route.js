'use strict';
var express = require('express'),
    productsRoute = express.Router(),
    products = require('./products-list.js');

productsRoute.get('/', products.list)
    .get('/:id', products.get)
    .post('/', products.create)
    .put('/:id', products.put)
    .delete('/:id', products.delete);

module.exports = productsRoute;