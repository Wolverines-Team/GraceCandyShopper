const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/stocks', require('./stocks'));
router.use('/categories', require('./categories'));
router.use('/cart', require('./cart'));
router.use('/reviews', require('./reviews'));
router.use('/order', require('./order'));
router.use('/images', require('./images'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
