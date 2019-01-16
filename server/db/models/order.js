const Seqeulize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  order_status: {
    type: Seqeulize.ENUM('packaging', 'shipping', 'complete'),
    defaultValue: 'packaging'
  }
});

module.exports = Order;
