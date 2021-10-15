const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us Area Name!']
      },
    code:{
      type: String,
        required: [true, 'Please tell us product code!']
    },
    image:{
      type: String,
    },
    mobile:{
      type: String,
    },
    maxDiscount:{
      type: Number,
    },
    unitType:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Unit',
      default: null
    },
    unitPrice:{
      type: Number,
    },
    category:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null
    },
    brand:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      default: null
    },

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;