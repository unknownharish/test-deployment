const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: String,
    typeOf: String,

    // other fields
}, { timestamps: true }
);

exports.User = mongoose.model('order', orderSchema);