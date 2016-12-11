'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

(function() {

    var productSchema = {
        name: {
            type: String,
            default: '',
            trim: true,
            required: true
        },
        description: {
            type: String,
            default: '',
            trim: true,
            required: true
        },
        Specs: {
            type: Array,
            required: true
        },
        createdDate: {
            type: Date,
            default: Date.now
        }
    };

    mongoose.model('Products', productSchema);

})();