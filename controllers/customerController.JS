const { customer: Customer } = require('../models/customer');

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createCustomer = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            throw { name: 'ValidationError', errors: { message: 'Name and email are required.' } };
        }

        const customer = new Customer({ name, email });
        await customer.save();
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};