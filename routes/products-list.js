'use strict';
var mongoose = require('mongoose'),
    productSchema = mongoose.model('ProductSchema');

var products = {
    list: function(req, res) {
        productSchema.find(function(err, result) {
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