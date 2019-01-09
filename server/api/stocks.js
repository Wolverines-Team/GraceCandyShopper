const router = require('express').Router()
const { Stock } = require('../db/models')
module.exports = router

//  /api/stocks/

// ../util
function requireLogin (req, res, next) {
  if (req.user) {
    next()
  }
  res.sendStatus(401)
}

function requireAdmin (req, res, next) {
  if (req.user.isAdmin) {
    next()
  }
  res.sendStatus(403)
}

Stock.adminWritableFields = ['name', 'price']
Stock.customerServiceWritableFields = ['name']

router.post('/', requireLogin, requireAdmin, async (req, res, next) => {
  try {
    const stockAttributes = _.pick(req.body, Stock.adminWritableFields)
    const stock = await Stock.create(stockAttributes)
    res.json(stock)
  }
  catch (error) {
    next(error)
  }
})

router.get('/',  async (req, res, next) => {
  try {
    const stocks = await Stock.findAll()
    res.json(stocks)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const stock = await Stock.findOne({ where: { id: req.params.id } })
    res.json(stock)
  } catch (err) {
    next(err)
  }
})








cartRouter.delete('/:cartId', requireLogin, (req, res, next) => {
  if (req.user.isAdmin) {
    // Cart.findById(cartId).delete()
  }
  else {
    // cart = Cart.findOne({ where: { userId: req.user.id, id: req.prams.cartId } })
    // if (cart) {
    //  cart.delete()
    // }
    // else {
    // res.sendStatus(403)
    // }
  }
})


cartRouter.get('/', requireLogin, (req, res, next) => {
  if (req.user.isAdmin) {
    // carts = Cart.findAll
  }
  else {
    // carts = req.user.getCarts
  }
})














