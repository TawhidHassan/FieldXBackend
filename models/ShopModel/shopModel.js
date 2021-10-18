const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us shop Name!']
      },
    shopCode: {
      type: String,
      required: [true, 'Please tell us shop code!']
    },
    route:{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'Route',
        default: null
    },
    org:{
      type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    ownerName:{
      type: String,
      required: [true, 'Please tell us shop owner name!']
    },
    phoneNumber:{
      type: String,
      required: [true, 'Please tell us shop Phone number!']
    },
    image:{
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    } 
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;