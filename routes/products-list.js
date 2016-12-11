'use strict';
var mongoose = require('mongoose'),
    Products = mongoose.model('Products');

var products = {
    list: function(req, res) {
        Products.find(function(err, result) {
            if(err) {
                console.error('Cannot get the list of Products');
                res.status(500).send({error: 'Cannot get the list of products'});
            }else {
                res.json(result);
            }
        });
    },
    get: function(req, res) {
        var id = req.params.id;
        Products.findById(id).exec(function(err, result) {
            if(err) {
                console.log('Cannot get the specific product');
                res.status(404).send({error: 'Cannot get the specific product'});
            }else if(!result) {
                res.status(404).send({error: 'Cannot get the specific product'});
            }else {
                res.json(result);
            }
        });
    },

    create: function(req, res) {
        var productData = req.body,
            products = new Products({
                name: productData.name,
                description: productData.description,
                Specs: productData.Specs,
                price: productData.price
            });
        products.save(function(err, result) {
            if(err) {
                console.log('Cannot save the product');
                res.status(500).send({error: 'Cannot save the product'});
            }else {
                res.send('New Product Added');
            }
        });
    },

    put: function(req, res) {
        var id = req.params.id,
            productData = req.body;
        
        Products.findById(id).exec(function(err, result) {
            if(err) {
                console.log('Update failed.');
                res.status(404).send({error: 'Update failed'});
            }else {
                result.name = productData.name;
                result.description = productData.description;
                result.Specs = productData.Specs;
                result.price = productData.price;

                result.save(function(err) {
                    if(err) {
                        console.log('Cannot save the product');
                        res.status(500).send({error: 'Cannot save the product'});
                    }else {
                        res.send('Updated Successfully');
                    }
                });
            }
        });
    },

    delete: function(req, res) {
        var id = req.params.id;
        Products.findById(id).exec(function(err, result) {
            if(err) {
                console.log('Cannot get the specific product');
                res.status(404).send({error: 'Cannot get the specific product'});
            }else {
                result.remove(function(err) {
                    if(err){
                        console.log('Cannot delete the product');
                        res.status(500).send({error: 'Cannot delete the product'});
                    }else {
                        res.send('Product Deleted Successfully');
                    }
                })
            }
        });
    }
};

module.exports = products;