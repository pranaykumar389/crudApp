'use strict';
var mongoose = require('mongoose'),
    Products = mongoose.model('Products');

var products = {
    list: function(req, res) {
        Products.find(function(err, result) {
            if(err) {
                console.error('Cannot get the list of Products');
                res.status(500).send(error, 'Cannot get the list of products');
            }else {
                res.json(result);
            }
        });
    }
};

module.exports = products;