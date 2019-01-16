<<<<<<< HEAD
const router = require('express').Router()
const { CartItems, Cart, Stock, Address } = require('../db/models')
const nodemailer = require('nodemailer')
const { requireAdmin } = require('./util')
module.exports = router
=======
const router = require('express').Router();
const { CartItems, Cart, Stock, Order, Address } = require('../db/models');

const { requireAdmin } = require('./util');
module.exports = router;
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614

// Actual path: /api/cart/:cartId
// Show all cart items
// Accessibility: For all users
router.get('/:cartId', async (req, res, next) => {
<<<<<<< HEAD
  try {
    const singleCartView = await CartItems.findAll({
      where: { userId: req.params.userId }
    })
    res.json(singleCartView)
  } catch (err) {
    next(err)
  }
})

router.get('/history/:cartId', async (req, res, next) => {
=======
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614
  try {
    const singleCartView = await CartItems.findAll({
      where: { cartId: req.params.cartId }
    })
    res.json(singleCartView)
  } catch (err) {
    next(err)
  }
})

// Actual path: /api/cart
// Adding candy item to single user's cart.
// Accessibility: User, Guest (Need to add..)
router.post('/:cartId', async (req, res, next) => {
  try {
    const newItem = await CartItems.create({
      cartId: req.params.cartId,
      stockId: req.body.stockId,
      quantity: Number(req.body.quantity)
    })
    res.status(200).json(newItem)
  } catch (err) {
    next(err)
  }
})

// Actual path: /api/cart/:cartItemId
// Updating the number of quantity in the cart items list.
// Accessibility: For Admin only. (Need to add..)
router.put('/:cartItemId', async (req, res, next) => {
  try {
<<<<<<< HEAD
=======
    console.log('******* cartItems: >> ', req.params.cartItemId);
    console.log('==req.body from CardView click==', req.body);
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614
    const currentCartItem = await CartItems.findOne({
      where: {
        stockId: req.body.stockId,
        cartId: req.body.cartId
      }
    })
    const updatedCartItem = await currentCartItem.update({
      quantity: req.body.quantity
    })
    res.status(200).json(updatedCartItem)
  } catch (err) {
    next(err)
  }
})

// checkout

router.post('/checkout/:cartId', async (req, res, next) => {
  try {
    const orderCart = await Cart.findById(req.params.cartId)
    const { street, zip, firstName, lastName, state, city } = req.body
    const address = await Address.find({
      where: { street, zip, firstName, lastName, state, city }
    })
    console.log(address.id)
    const completeCart = await orderCart.update({
      isPurchased: true,
      addressId: address.id
    })
    res.status(200).json(completeCart)
  } catch (err) {
    next(err)
  }
})
// Actual path: /api/cart/:cartId
// Deleting an existing candy in the cart item list.
// Accessibility: For Admin only. (Need to add..)
router.delete('/:cartItemId', async (req, res, next) => {
  try {
    await CartItems.destroy({
      where: {
        id: req.params.cartItemId
      }
    })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

// // Actual path: /api/cart/cartItems
// // Show all cart items in single cart
// // Accessibility: For all users
// router.get('/cartItems', async (req, res, next) => {
//   try {
//     const allItemsInTheCart = await CartItems.findAll({
//       where: { cartId: req.params.cartId },
//       include: [Stock]
//     })
//     res.json(singleCartView)
//   } catch (err) {
//     next(err)
//   }
// })
router.get('/cartinfo/:userId', async (req, res, next) => {
  try {
    const cartIni = await Cart.findOrCreate({
      where: { userId: req.user.id, isPurchased: false }
    })
    res.json(cartIni[0].id)
  } catch (err) {
    next(err)
  }
})

router.post('/sendemail', async (req, res, next) => {
  try {
    // const account = await nodemailer.createTestAccount()
    // const mailOptions = {
    //   from: 'noahbechtel@gmail.com', // sender address
    //   to: req.body.email,
    //   subject: 'Thankk You For Your Order! ✔',
    //   text: 'Your order is on its way!'
    // }
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.ethereal.email',
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: account.user, // generated ethereal user
    //     pass: account.pass // generated ethereal password
    //   }
    // })
    // const info = await transporter.sendMail(mailOptions)
    // console.error(info)
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
<<<<<<< HEAD
})
=======
});

//Admin access to purchased carts
//Actual path:
//api/cart/coitems/admin

router.get('/coitems/admin', async (req, res, next) => {
  try {
    const checkedOut = await CartItems.findAll({
      include: [
        {
          model: Cart,
          where: { isPurchased: true },
          include: [{ model: Order }]
        },
        { model: Stock }
      ]
    });
    console.log('checkedOut', checkedOut);
    res.status(200).json(checkedOut);
  } catch (err) {
    next(err);
  }
});

//Ozlem`s Note:
// Don`t delete following route, in the future, we can make the dashboard better as follow...

// router.get('/coitems/admin', async (req, res, next) => {
//   try {
//     const checkedOut = await Cart.findAll({
//       where: {isPurchased: true},
//       include: [{model: CartItems}]
//     });
//     console.log('checkedOut', checkedOut);
//     res.status(200).json(checkedOut);
//   } catch (err) {
//     next(err);
//   }
// });
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614
