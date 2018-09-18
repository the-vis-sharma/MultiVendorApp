//User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// Define collection and schema for Course
var User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
      type: String,
      required: true
  },
  mobile: {
      type: Number,
      required: true
  },
  user_type: {
      type: String,
      required: true  
  },
  profile_pic: {
      type: String,
      required: true
  }
},{
    collection: 'user'
});

User.plugin(timestamp);

module.exports = mongoose.model('User', User);