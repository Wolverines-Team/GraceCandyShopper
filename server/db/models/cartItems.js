const Seqeulize = require('sequelize');
const db = require('../db');

const CartItems = db.define('cartItem', {
  quantity: {
    type: Seqeulize.INTEGER,
    defaultValue: 1
  }
});

module.exports = CartItems;
