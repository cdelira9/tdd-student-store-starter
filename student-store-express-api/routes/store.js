const express = require("express");
const Store = require("../models/store");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const products = await Store.listProducts();
  res.status(200).send(products);
});

router.get("/:productId", async (req, res, next) => {
  const productId = req.params.productId;
  console.log("hello");
  const product = await Store.productById(productId);
  res.status(200).send(product);
  console.log({ product });
});

module.exports = router;
