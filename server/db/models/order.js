const Seqeulize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  order_status: {
    type: Seqeulize.ENUM('received', 'shippiing')
  }
});

module.exports = Order;
