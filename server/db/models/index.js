const db = require('../db');
const User = require('./user');
const Rating = require('./rating');
const Stock = require('./stock');
const Address = require('./address');
const Images = require('./images');
const CartItems = require('./cartItems');
const Cart = require('./cart');
const Category = require('./categories');
const Order = require('./order');
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Images.belongsTo(Stock);
Stock.hasMany(Images);
Cart.belongsTo(User);
User.hasMany(Cart);
Rating.belongsTo(User);
Rating.belongsTo(Stock);
Address.belongsTo(User);
User.hasMany(Address);
Cart.belongsTo(Address);
CartItems.belongsTo(Cart);
CartItems.belongsTo(Stock);
Stock.belongsToMany(Category, { through: 'StockCategory' });
Category.belongsToMany(Stock, { through: 'StockCategory' });
Order.belongsTo(Cart);

Cart.hasMany(CartItems);
Cart.hasOne(Order);

/* Edwin's Comment: Might end up deleting.. */
Stock.hasMany(Rating);
// User.hasMany(Address);
// User.hasMany(Rating);
// Stock.hasMany(Images);
// Cart.hasMany(CartItems)

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
  Cart,
  Order,
  Category
};
