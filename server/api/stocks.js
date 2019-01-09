const router = require('express').Router()
const { Stock, Rating } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const stocks = await Stock.findAll({ include: [{ model: Rating }] })
    res.json(stocks)
  } catch (err) {
    next(err)
  }
})

router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Stock.findAll({
      attributes: ['category']
    })
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

router.get('/:stockId', async (req, res, next) => {
  try {
    const candy = await Stock.findById(req.params.stockId)
    res.status(200).json(candy)
  } catch (err) {
    next(err)
  }
})

// Create a candy product(stock).
router.post('/', async (req, res, next) => {
  try {
    // Edwin's Comment: Is the whole req.body what we want? Or is there a different form we would prefer?
    const newCandy = await Stock.create(req.body)
    res.status(200).json(newCandy)
  } catch (err) {
    next(err)
  }
})

router.put('/:stockId', async (req, res, next) => {
  try {
    const oldCandy = await Stock.findById(req.params.stockId)
    const updatedCandy = await oldCandy.update(req.body)
    res.status(200).json(updatedCandy)
  } catch (err) {
    next(err)
  }
})

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

// ...view the full list of products (the product catalog), so that I can see everything that's available
// ...refine product listings by category, so that I can narrow down my choices to see only the types of items I'm interested in
// ...search product listings, so that I can find specific products I want by name
// ...view the details for an inidivdual product (including product descriptions, photos and reviews), so that I can determine whether that particular item fits my needs
