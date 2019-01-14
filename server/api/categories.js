const router = require('express').Router();
const { Category, Stock, Images } = require('../db/models');

const { requireLogin, requireAdmin } = require('./util');

module.exports = router;

// Actual path: /api/categories/
// GET all categories
// Accessibility: For all users
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

//Actual path: /api/categories/:categoryId
//GET all candies by the specific category
//Accessibility: For all users
router.get('/:categoryId/:mainId', async (req, res, next) => {
  try {
    const stockedCandies = await Category.findById(req.params.categoryId, {
      include: [
        {
          model: Stock,
          include: [
            { model: Images },
            { model: Category, where: { id: req.params.mainId } }
          ]
        }
      ]
    });
    res.status(200).json(stockedCandies);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/categories/
// Creating a new category
// Accessibility: For Admin only. (Need to add..)
router.post('/', async (req, res, next) => {
  try {
    // Edwin's Comment: The below should work fine. Once it works, will replace with the loadash _.pick method at the end for cleaner and fancier visual.
    const { category_name } = req.body;
    const newCategory = await Category.create({ category_name });
    res.status(200).json(newCategory);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/categories/:categoryId
// Updating an existing category
// Accessibility: For Admin only. (Need to add..)
router.put('/:categoryId', async (req, res, next) => {
  try {
    // Edwin's Comment: The below should work fine. Once it works, will replace with the loadash _.pick method at the end for cleaner and fancier visual.
    const currentCategory = await Category.findById(req.params.categoryId);

    const updatedCategory = await currentCategory.update({
      category_name: req.body.category_name
    });

    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
});

// Actual path: /api/categories/:categoryId
// Deleting an existing category
// Accessibility: For Admin only. (Need to add..)
router.delete('/:categoryId', async (req, res, next) => {
  try {
    await Category.destroy({
      where: {
        id: req.params.categoryId
      }
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
