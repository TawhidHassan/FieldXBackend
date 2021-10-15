const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const RegionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us Area Name!']
      },
});

const Region = mongoose.model('Region', RegionSchema);

module.exports = Region;