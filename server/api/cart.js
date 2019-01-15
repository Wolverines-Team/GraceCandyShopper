const router = require('express').Router();
const { CartItems, Cart, Stock } = require('../db/models');

const { requireLogin } = require('./util');
module.exports = router;

// Actual path: /api/cart/:cartId
// Show all cart items
// Accessibility: For all users
router.get('/:cartId', async (req, res, next) => {
  try {
    const singleCartView = await CartItems.findAll({
      where: { cartId: req.params.cartId }
    });
    res.json(singleCartView);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/cart
// Adding candy item to single user's cart.
// Accessibility: User, Guest (Need to add..)
router.post('/:cartId', async (req, res, next) => {
  try {
    const newItem = await CartItems.create({
      cartId: req.params.cartId,
      stockId: req.body.stockId,
      quantity: req.body.quantity
    });
    res.status(200).json(newItem);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/cart/:cartItemId
// Updating the number of quantity in the cart items list.
// Accessibility: For Admin only. (Need to add..)
router.put('/:cartItemId', async (req, res, next) => {
  try {
    const currentCartItem = await CartItems.findOne({
      where: {
        stockId: req.body.stockId,
        cartId: req.body.cartId
      }
    });
    const updatedCartItem = await currentCartItem.update({
      quantity: req.body.quantity
    });
    res.status(200).json(updatedCartItem);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/cart/:cartId
// Deleting an existing candy in the cart item list.
// Accessibility: For Admin only. (Need to add..)
router.delete('/:cartItemId', async (req, res, next) => {
  try {
    await CartItems.destroy({
      where: {
        id: req.params.cartItemId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// // Actual path: /api/cart/cartItems
// // Show all cart items in single cart
// // Accessibility: For all users
// router.get('/cartItems', async (req, res, next) => {
//   try {
//     const allItemsInTheCart = await CartItems.findAll({
//       where: { cartId: req.params.cartId },
//       include: [Stock]
//     })
//     res.json(singleCartView)
//   } catch (err) {
//     next(err)
//   }
// })
router.get('/cartinfo/:userId', async (req, res, next) => {
  try {
    const cartIni = await Cart.findOrCreate({
      where: { userId: req.user.id, isPurchased: false }
    });
    res.json(cartIni[0].id);
  } catch (err) {
    next(err);
  }
});
