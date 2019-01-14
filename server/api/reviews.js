const router = require('express').Router();
const { requireLogin, requireAdmin } = require('./util');
const { Stock, Rating } = require('../db/models');
module.exports = router;

// Actual path: /api/stocks/
// GET all stocks
// Accessibility: For all users

router.post('/', async (req, res, next) => {
  try {
    // Edwin's Comment: Is the whole req.body what we want? Or is there a different form we would prefer?
    const newReview = await Rating.create({
      review_text: req.body.review_text,
      stockId: req.body.stockId,
      userId: req.body.userId,
      rating_num: req.body.rating_num
    });
    res.status(200).json(newReview);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Rating.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
