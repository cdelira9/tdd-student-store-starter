const express = require("express");
const Store = require("../models/store");
const router = express.Router();

router.post("/", (req, res, next) => {
  const purchases = req.body;

  const shoppingCart = purchases.shoppingCart;
  const user = purchases.user;
  const data = Store.purchaseOrder(shoppingCart, user);

  res.status(201).send(data);
});

router.get("/", async (req, res, next) => {
  const products = await Store.listProducts();
  res.status(200).send(products);
});

router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  console.log("hello");
  const product = await Store.productById(productId);
  res.status(200).send(product);
  console.log({ product });
});

module.exports = router;
