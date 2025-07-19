const Product = require("../models/Product");

// GET /api/products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// POST /api/products
exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
