const router = require('express').Router()
const { CartItem, Cart } = require('../db/models')
const { requireLogin } = require('./util')
module.exports = router

//Actual path: /api/cart/:cartId
//Show all cart items
//Accessibility: For all users
router.get('/:cartId', async (req, res, next) => {
  try {
    const singleCartView = await CartItem.findAll({
      where: { id: req.params.cartId }
    })
    res.json(singleCartView)
  } catch (err) {
    next(err)
  }
})

//Actual path: /api/cart
//Adding candy item to single user's cart.
//Accessibility: User, Guest (Need to add..)
router.post('/:cartId', async (req, res, next) => {
  try {
    const newItem = await CartItem.create({
      cartId: req.params.cartId,
      stockId: req.body.stockId,
      quantity: req.body.quantity
    })
    res.status(200).json(newItem)
  } catch (err) {
    next(err)
  }
})

//Actual path: /api/cart/:cartId
// Updating the number of quantity in the cart items list.
// Accessibility: For Admin only. (Need to add..)
router.put('/:cartItemId', async (req, res, next) => {
  try {
    const currentCartItem = await CartItem.findById(req.params.cartItemId)
    const updatedCartItem = await currentCartItem.update({
      quantity: req.body.quantity
    })
    res.status(200).json(updatedCartItem)
  } catch (err) {
    next(err)
  }
})

//Actual path: /api/cart/:cartId
// Deleting an existing candy in the cart item list.
// Accessibility: For Admin only. (Need to add..)
router.delete('/:cartItemId', async (req, res, next) => {
  try {
    await CartItem.destroy({
      where: {
        id: req.params.cartItemId
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
