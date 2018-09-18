//User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// Define collection and schema for Course
var Cart = new Schema({
  customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
  product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
  },
  total_item: {
      type: Number,
      required: true

  },
  total_amount: {
      type: Number,
      required: true
  }
},{
    collection: 'cart'
});

Cart.plugin(timestamp);

module.exports = mongoose.model('Cart', Cart);