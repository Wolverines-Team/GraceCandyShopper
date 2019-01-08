const Seqeulize = require('sequelize')
const db = require('../db')

const CartItem = db.define('cartItems', {
  productId: {
    type: Seqeulize.INTEGER
  },
  cartId: {
    type: Seqeulize.INTEGER
  },
  quantity: {
    type: Seqeulize.INTEGER
  }
})

module.exports = CartItem
