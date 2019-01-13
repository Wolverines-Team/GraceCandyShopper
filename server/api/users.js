const router = require('express').Router()
const { User, Cart } = require('../db/models')
const { requireLogin, requireAdmin } = require('./util')
module.exports = router

// All users. (Edwin's Comment: for Admin's view??)
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

// Single user (Edwin's comment: For signed in user view? If so, need to do something with authentication?)
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findById({ where: { id: req.params.userId } })
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
})

// Creating a new user (Edwin's Commenmt: Authentication??)
// router.post('/', async (req, res, next) => {
//   try {
//     // Edwin's Comment: Do we want to use the entire req.body form?
//     const newUser = await User.create({
//       sessionId: req.session.id,
//       password: req.body.password,
//       email: req.body.email
//     })
//     res.status(200).json(newUser)
//   } catch (err) {
//     next(err)
//   }
// })

// Update user (Edwin's Comment: Authentication?)
router.put('/:userId', async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    // Edwin's Comment: Do we want the entre req.body form?
    const updatedUser = await currentUser.update(req.body)
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

// Remove user (Edwin's comment: authentication? Admin?)
router.delete('/:userId', async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.userId
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})
