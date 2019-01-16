const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  total_quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

// Edwin's Comment:
// hook method needed: Accumulative calculation for total quantity evrerytime user adds cart item...

module.exports = Cart;
