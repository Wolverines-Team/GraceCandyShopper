const db = require('../db')
const User = require('./user')
const Rating = require('./rating')
const Stock = require('./stock')
const Address = require('./address')
const Images = require('./images')
const CartItems = require('./cartItems')
const Cart = require('./cart')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Stock.hasMany(Rating)
Rating.belongsTo(Stock)
User.hasMany(Address)
Address.belongsTo(User)
User.hasMany(Rating)
Rating.belongsTo(User)
Images.belongsTo(Stock)
Stock.hasMany(Images)
CartItems.belongsTo(Cart)
CartItems.belongsTo(Stock)
Cart.hasMany(CartItems)
Cart.belongsTo(User)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Address,
  Stock,
  Rating,
  CartItems,
  Images,
  Cart
}
