const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,
  phone: String
  // other fields
});

exports.User = mongoose.model('User', userSchema);