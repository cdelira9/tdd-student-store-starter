const express = require("express");
const router = express.Router();
const Orders = require("../models/orders");

router.get("/", async (req, res, next) => {
  const orders = await Orders.getOrders();
  res.status(200).send(orders);
});

router.get("/:orderId", async (req, res, next) => {
  const order = await Orders.getOrderById(req.params.orderId);
  res.status(200).json(order);
});

module.exports = router;
