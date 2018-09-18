//User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamp = require('mongoose-timestamp');

// Define collection and schema for Course
var Address = new Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    pin_code: {
        type: Number,
        required: true
    }
},{
    collection: 'address'
});

Address.plugin(timestamp);

module.exports = mongoose.model('Address', Address);