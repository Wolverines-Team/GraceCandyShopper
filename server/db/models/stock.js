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
  images: {
    type: Sequelize.STRING,
    defaultValue: '../public/images/default_candy.jpeg'
  },
  quantity: {
    type: Sequelize.NUMBER,
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
  averageReview: {
    type: Sequelize.NUMBER,
    validate: {
      min: 1,
      max: 5
    },
    defaultValue: 5
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'CandyShop'
  }
})

module.exports = Stock
