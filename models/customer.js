const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name: String,
  email: String,
  // other fields
});

exports.customer = mongoose.model('customer', customerSchema);