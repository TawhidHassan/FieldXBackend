const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');

const teritoriSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please tell us Terirori Name!']
      },
});

const Teritori = mongoose.model('Teritori', teritoriSchema);

module.exports = Teritori;