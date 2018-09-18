//User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// Define collection and schema for Course
var Product = new Schema({
  name: {
    type: String,
    required: true
  },
  shop_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shop',
      required: true
  },
  img: {
      type: String,
      required: true
  },
  unit_price: {
      type: Number,
      required: true  
  },
  mess_unit: {
      type: String,
      required: true
  },
  category: {
    type: String,
    required: true
  },
  rating_avg: {                //estimated delivery time
      type: Number
  },
  review_count: {
      type: Number,
      default: 0,
  },
  description: {              //like veg, non-veg
      type: String,
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
    collection: 'product'
});

Product.plugin(timestamp);

module.exports = mongoose.model('Product', Product);