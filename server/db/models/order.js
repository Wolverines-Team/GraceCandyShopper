const Seqeulize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  order_status: {
    type: Seqeulize.ENUM('Packaging', 'Shipping', 'Complete'),
    defaultValue: 'Packaging'
  }
});

module.exports = Order;
