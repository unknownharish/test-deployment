const Order = require('../models/order');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.createOrder = async (req, res) => {
    try {
        let order = new Order({ ...req.body });
        order = order.save()
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getOrderById = async (req, res) => {
    try {
        let order = Order.findbyId(req?.params?.id);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.updateOrder = async (req, res) => {
    try {
        let order = Order.findByIdAndUpdate(req?.params?.id, req?.body, { new: true });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.deleteOrder = async (req, res) => {
    try {
        let order = Order.findByIdAndDelete({_id:req?.params?.id});
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
