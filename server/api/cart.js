const router = require('express').Router()
const { CartItem, Cart } = require('../db/models')
const { requireLogin } = require('./util')
module.exports = router

//Actual path: /api/cart/:cartId
//Show all cart items
//Accessibility: For all users
router.get(':userId/:cartId', async (req, res, next) => {
  try {
    const singleCartView = await CartItem.findAll({
      where: { id: req.params.cartId },
      include: [{ model: Cart }]
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

//Actual path: /api/stocks/:stockId
// Updating an existing candy
// Accessibility: For Admin only. (Need to add..)
router.put('/:stockId', async (req, res, next) => {
  try {
    const oldCandy = await Stock.findById(req.params.stockId)
    const updatedCandy = await oldCandy.update(req.body)
    res.status(200).json(updatedCandy)
  } catch (err) {
    next(err)
  }
})

//Actual path: /api/stocks/:stockId
// Deleting an existing candy
// Accessibility: For Admin only. (Need to add..)
router.delete('/:stockId', async (req, res, next) => {
  try {
    await Stock.destroy({
      where: {
        id: req.params.stockId
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
