const router = require('express').Router();

const { requireLogin, requireAdmin } = require('./util');
const {
  Stock,
  Rating,
  Images,
  StockCategory,
  Category
} = require('../db/models');

module.exports = router;

// Actual path: /api/stocks/
// GET all stocks
// Accessibility: For all users
router.get('/', async (req, res, next) => {
  try {
    const stocks = await Stock.findAll({
      include: [{ model: Rating }, { model: Images }, { model: Category }]
    });
    res.json(stocks);
  } catch (err) {
    next(err);
  }
});

router.get('/categories', async (req, res, next) => {
  try {
    const stock = await Stock.findOne({ where: { id: req.params.id } });
    res.json(stock);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/stocks/:stockId
// GET single candy
// Accessibility: For all users
router.get('/:stockId', async (req, res, next) => {
  try {
    console.log('==Are we hitting at singleview server==', req.params.stockId);
    const candy = await Stock.findById(req.params.stockId);
    res.status(200).json(candy);
  } catch (err) {
    next(err);
  }
});

// Create a candy product(stock).
// Actual path: /api/stocks
// Create a new candy product(stock).
// Accessibility: For Admin only. (Need to add..)
router.post('/', async (req, res, next) => {
  try {
    // Edwin's Comment: Is the whole req.body what we want? Or is there a different form we would prefer?
    const newCandy = await Stock.create({
      name: req.body.name,
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price,
      brand: req.body.brand,
      images: [{ id: 0, imageUrl: '/images/candy10-1.png' }]
    });
    res.status(200).json(newCandy);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/stocks/:stockId
// Updating an existing candy
// Accessibility: For Admin only. (Need to add..)
router.put('/:stockId', async (req, res, next) => {
  try {
    const oldCandy = await Stock.findById(req.params.stockId);
    const updatedCandy = await oldCandy.update(req.body);
    res.status(200).json(updatedCandy);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/stocks/:stockId
// Deleting an existing candy
// Accessibility: For Admin only. (Need to add..)
router.delete('/:stockId', async (req, res, next) => {
  try {
    await Stock.destroy({
      where: {
        id: req.params.stockId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// ...view the full list of products (the product catalog), so that I can see everything that's available
// ...refine product listings by category, so that I can narrow down my choices to see only the types of items I'm interested in
// ...search product listings, so that I can find specific products I want by name
// ...view the details for an inidivdual product (including product descriptions, photos and reviews), so that I can determine whether that particular item fits my needs
