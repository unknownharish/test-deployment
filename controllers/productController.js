const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.createProduct = async (req, res) => {
    try {
        let product = new Product(req?.body);
        product = product.save()
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getProductById = async (req, res) => {
    try {
        let product = Product.findById(req?.params?.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.updateProduct = async (req, res) => {
    try {
        let product = Product.findByIdAndUpdate(req?.params?.id, req?.body, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.deleteProduct = async (req, res) => {
    try {
        let product = Product.findByIdAndDelete(req?.params?.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
