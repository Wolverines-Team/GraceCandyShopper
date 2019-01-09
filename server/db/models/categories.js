const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('categories', {
  category_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Category
