const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const officeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us office name!']
  },
  address: {
    type: String,
  },
  org:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
  },
  lat: {
    type: String,
    required: [true, 'Please give latitude of office!']
  },
  lon: {
    type: String,
    required: [true, 'Please give longatitude of office!']
  },
  startTime: {
    type: String,
    required: [true, 'Please give office srat time!']
  },
  offTime: {
    type: String,
    required: [true, 'Please give office off time!']
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});


const User = mongoose.model('Office', userSchema);

module.exports = User;
