const Product = require("../models/product-model");

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(403).json(`The error in addproduct is : ${err}`);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(403).json(`The error in getAllProducts is : ${err}`);
  }
};

exports.removeProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    await product.deleteOne();
    res.status(200).json("Deleted.");
  } catch (err) {
    res.status(403).json(`The error in removeProduct is : ${err}`);
  }
};

exports.getsingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (err) {
    res.status(403).json(`The error in getsingleProduct is : ${err}`);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(403).json(`The error in updateProduct is : ${err}`);
  }
};

exports.search = async (req, res) => {
  try {
    const products = await Product.find({
      $or: [
        { name: { $regex: req.params.key } },
        { category: { $regex: req.params.key } },
        { brand: { $regex: req.params.key } },
      ],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(403).json(`The error in search is : ${err}`);
  }
};
