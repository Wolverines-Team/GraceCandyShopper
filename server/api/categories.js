const router = require('express').Router()
const {
  Category,
  Stock
} = require('../db/models')
module.exports = router

//Actual path: /api/categories/
//GET all categories
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (err) {
    next(err)
  }
})

//Actual path: /api/categories/:categoryId
//GET all candies by the specific category

// Edwin's Comment:
// /categories/:categoryId
// or should it be: /stocks/categories/:categoryId >>> depending on this decision, we will locate this router in a different file.
router.get('/:categoryId', async (req, res, next) => {
  try {
    const stockedCandies = await Category.findById(
      req.params.categoryId,
      { include: [Stock] }
    )
    res.status(200).json(stockedCandies)
  } catch (err) {
    next(err)
  }
})

// //creating a new category
// router.post('/', async (req, res, next) => {
//   try {
//     //Edwin's comment: Do we want the entire req.body form?
//     const newCategory = await Category.create(req.body);
//     res.status(200).json(newCategory)
//   } catch (err) {
//     next(err)
//   }
// })

// //Do we need a delete for this?? router.delete()
