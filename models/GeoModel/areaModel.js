const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const areaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us Area Name!']
      },
});

const Area = mongoose.model('Area', areaSchema);

module.exports = Area;