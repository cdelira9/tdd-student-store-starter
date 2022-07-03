const storage = require("../data/storage");

class Orders {
  static async getOrders() {
    const purchase = storage.storage.get("purchases").value();
    return purchase;
  }

  static async getOrderById(purchaseId) {
    const purchases = storage.storage
      .get("purchases")
      .find({ id: Number(purchaseId) })
      .value();
    return purchases;
  }
}

module.exports = Orders;
