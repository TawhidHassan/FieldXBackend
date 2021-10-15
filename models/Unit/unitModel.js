const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us Area Name!']
      },
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;