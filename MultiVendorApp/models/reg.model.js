//reg.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// Define collection and schema for Course
var Reg = new Schema({
  user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  pass: {
      type: String,
      required: true
  },
  device_ids: {
      type: Array,
      required: true
  }
},{
    collection: 'reg'
});

Reg.plugin(timestamp);

module.exports = mongoose.model('Reg', Reg);