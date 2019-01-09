const router = require('express').Router()
const { Stock } = require('../db/models')
module.exports = router

//  /api/stocks/
router.get('/', async (req, res, next) => {
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
