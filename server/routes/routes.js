const express = require("express");
const {
  addProduct,
  getAllProducts,
  removeProduct,
  getsingleProduct,
  updateProduct,
  search,
} = require("../controllers/product-controller");
const { signupUser, loginUser, verifyToken } = require("../controllers/user-controller");
const router = express.Router();

//products
const product = "/api/products";
router.post(`${product}/addproduct`,verifyToken, addProduct);
router.get(`${product}/`, getAllProducts);
router.delete(`${product}/:id`, removeProduct);
router.get(`${product}/:id`, getsingleProduct);
router.put(`${product}/:id`, updateProduct);
router.get(`${product}/search/:key`, search);

//user
const user = "/api/users";
router.post(`${user}/signup`, signupUser);
router.post(`${user}/login`, loginUser);

module.exports = router;
