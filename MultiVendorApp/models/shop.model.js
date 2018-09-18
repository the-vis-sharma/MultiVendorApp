//User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// Define collection and schema for Course
var Shop = new Schema({
  name: {
    type: String,
    required: true
  },
  categories: {
      type: String,
      required: true
  },
  logo: {
      type: String,
      required: true
  },
  cover_img: {
      type: String,
      required: true  
  },
  open_time: {
      type: String,
      required: true
  },
  close_time: {
    type: String,
    required: true
  },
  edt: {                //estimated delivery time
      type: Number
  },
  rating_count: {
      type: Number,
      default: 0
  },
  rating: {
      type: Number
  },
  types: {              //like veg, non-veg
      type: String,
      required: true
  },
  shopkeeper_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  is_approved: {
      type: Boolean,
      default: false
  },
  approved_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  approved_on: {
      type: Date,
      default: Date.now
  }

},{
    collection: 'shop'
});

Shop.plugin(timestamp);

module.exports = mongoose.model('Shop', Shop);