const Order = require('../models/Order');

class OrderRepository {

  async create(payload) {
    return Order.create(payload);
  }
}

module.exports = new OrderRepository();