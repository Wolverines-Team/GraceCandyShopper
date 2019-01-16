const router = require('express').Router();
const { Images } = require('../db/models');
const { requireLogin, requireAdmin } = require('./util');
module.exports = router;

router.get('/:imageId', async (req, res, next) => {
  try {
    const Image = await Images.findById(req.params.imageId);
    res.status(200).json(Image);
  } catch (err) {
    next(err);
  }
});

router.post('/:imageId', async (req, res, next) => {
  try {
    const newImage = await Images.create({
      stockId: req.body.stockId,
      imageUrl: req.body.imageUrl
    });
    res.status(200).json(newImage);
  } catch (err) {
    next(err);
  }
});

router.put('/:imageId', async (req, res, next) => {
  try {
    const currentImage = await Images.findById(req.params.imageId);
    const updatedImage = await currentImage.update(req.body);
    res.status(200).json(updatedImage);
  } catch (err) {
    next(err);
  }
});
