const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us Category Name!']
      },
});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;