const { User } = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.createUser = async (req, res, next) => {
  try {
    const { firstName = '', email = '', password = '', username = '', lastName = '', phone = '' } = req.body;
    console.log('body is ', firstName, email, password, username, lastName, phone)
    if (!firstName || !email) {
      throw { name: 'ValidationError', errors: { message: 'Name and email are required.' } };
    }
    const user = new User({ firstName, email, password, username, lastName, phone });
    await user.save();
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const { firstName = '', email = '', password = '', username = '', lastName = '', phone = '' } = req.body;
    if (!firstName || !email) {
      throw { name: 'ValidationError', errors: { message: 'Name and email are required.' } };
    }

    const user = await User.updateOne({ firstName, email }, { $set: { firstName, email, password, username, lastName, phone } });
    res.json(user);
  } catch (error) {
    next(error);
  }
};
exports.deleteUser = async (req, res, next) => {
  try {
    const { firstName = '', email = '', password = '', username = '', lastName = '', phone = '' } = req.body;
    if (!firstName || !email) {
      throw { name: 'ValidationError', errors: { message: 'Name and email are required.' } };
    }

    const user = await User.deleteOne({ firstName, email });
    res.json(user);
  } catch (error) {
    next(error);
  }
};