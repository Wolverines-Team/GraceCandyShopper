const router = require('express').Router();
const { CartItems, Order } = require('../db/models');

module.exports = router;

//Actual path: api/order/:orderId
router.put('/:orderId', async (req, res, next) => {
  try {
    const { order_status } = req.body;
    const order = await Order.findById(req.params.orderId);
    const final = await order.update({
      order_status
    });
    res.json(final);
  } catch (err) {
    next();
  }
});
