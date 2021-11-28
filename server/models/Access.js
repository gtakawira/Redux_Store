const mongoose = require('mongoose');

const { Schema } = mongoose;

const accessSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const Access = mongoose.model('Access', accessSchema);

module.exports = Access;
