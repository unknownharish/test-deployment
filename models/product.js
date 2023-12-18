const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  typeOfProduct: String,
  otherdetails:String
  // other fields
});

exports.customer = mongoose.model('product', ProductSchema);