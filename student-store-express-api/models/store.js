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

  static async purchaseOrder(cart, user) {
    var order = {
      id: this.createId(),
      name: user.name,
      email: user.email,
      order: cart,
    };

    let currentPurchases = storage.get("purchases");
    currentPurchases.push(order).write();

    return order;
  }
}

module.exports = Store;
