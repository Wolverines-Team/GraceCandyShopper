const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  stockId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = Cart