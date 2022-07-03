// YOUR CODE HERE
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const storeRouter = require("./routes/store");
// const orderRouter = require("./routes/orders");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.use("/store", storeRouter);

// app.get("/store", (req, res) => {
//   res.send(storage.get("products").value());
// });

// app.get("/store/:productId", (req, res) => {
//   le;
//   const productId = req.params.productId;
//   res.send(storage.get("products").find(productId).value());
// });

module.exports = app;
