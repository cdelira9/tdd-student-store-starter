const storage = require("../data/storage");

class Store {
  static async listProducts() {
    const products = storage.storage.get("products").value();
    return products;
  }

  static async productById(productId) {
    const product = storage.storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return product;
  }
}

module.exports = Store;
