const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us Brand Name!']
      },
});

const Brand = mongoose.model('Area', brandSchema);

module.exports = Brand;