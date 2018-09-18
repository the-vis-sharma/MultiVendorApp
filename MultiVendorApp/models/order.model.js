//User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// Define collection and schema for Course
var Order = new Schema({
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
  quantity: {
      type: Number,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  delivery_address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
      required: true
  }
},{
    collection: 'order'
});

Order.plugin(timestamp);

module.exports = mongoose.model('Order', Order);