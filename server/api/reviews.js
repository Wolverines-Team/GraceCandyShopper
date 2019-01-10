const router = require('express').Router()
const { requireLogin, requireAdmin } = require('./util')
const { Stock, Rating } = require('../db/models')
module.exports = router

// Actual path: /api/stocks/
// GET all stocks
// Accessibility: For all users

router.post('/', async (req, res, next) => {
  try {
    // Edwin's Comment: Is the whole req.body what we want? Or is there a different form we would prefer?
    const newCandy = await Stock.create(req.body)
    res.status(200).json(newCandy)
  } catch (err) {
    next(err)
  }
})

router.delete('/:prodId', async (req, res, next) => {
  try {
    await Rating.destroy({
      where: {
        stockId: req.params.prodId
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
