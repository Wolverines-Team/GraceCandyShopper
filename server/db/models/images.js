// needs url and product id

const Seqeulize = require('sequelize')
const db = require('../db')

const Images = db.define('images', {
  productId: {
    type: Seqeulize.INTEGER
  },
  imageUrl: {
    type: Seqeulize.TEXT
  }
})

module.exports = Images
