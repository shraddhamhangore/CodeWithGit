const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
} = require("../Controllers/ProductController");

router.get("/Product", getAllProducts);
router.post("/Product", createProduct);

module.exports = router;
