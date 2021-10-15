const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const pjpSchema = new mongoose.Schema({
  route:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route',
    default: null
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  shop:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Shop',
    default: null
  },
  day:{
    type:String
  },
  month:{
    type:String
  }
});

const Pjp = mongoose.model('Pjp', areaSchema);

module.exports = Pjp;