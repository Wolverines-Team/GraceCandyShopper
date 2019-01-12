const Seqeulize = require('sequelize');
const db = require('../db');

const CartItems = db.define('cartItem', {
  quantity: {
    type: Seqeulize.INTEGER,
    defaultValue: 1
  }
});

//We don't need beforeCreate since by default, when a user adds a new item to his cart, quantity will be 1.
//However, if the item in cart exists and user adds again, we would need to use a beforeUpdate hook.
// CartItems.beforeUpdate(cartItem => {});

module.exports = CartItems;
