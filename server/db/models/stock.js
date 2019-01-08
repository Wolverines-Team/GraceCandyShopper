const Sequelize = require('sequelize')
const db = require('../db')

const Stock = db.define('stocks', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      'Our customers love this candy, it is yummy like all our products :)'
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 1000
    },
    defaultValue: 10
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    defaultValue: 0.99
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'candy'
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'CandyShop'
  }
})

module.exports = Stock
