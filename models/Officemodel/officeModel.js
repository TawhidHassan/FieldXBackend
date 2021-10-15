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
  workingDay:[
    {
      monthName:{
        type:String
      },
      days:{
        type:Number
      }
    }
  ],
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});


const Office = mongoose.model('Office', officeSchema);

module.exports = Office;
