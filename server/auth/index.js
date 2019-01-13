const router = require('express').Router()
const { User, Cart } = require('../db/models')

module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email }
    })
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const newUser = await User.create({
      sessionId: req.session.id,
      password: req.body.password,
      email: req.body.email,
      username: req.body.email
    })

    cart = await Cart.create({ userId: newUser.id })

    req.login(newUser, err => (err ? next(err) : res.json(newUser)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  try {
    res.json(req.user)
  } catch (err) {
    console.log(err)
  }
})

router.use('/google', require('./google'))
