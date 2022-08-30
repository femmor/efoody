const express = require('express');
const productController = require('../controllers/product');
const { authenticateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multer');

const router = express.Router();

router.post(
  '/',
  authenticateJWT,
  upload.single('productImage'),
  productController.create
);

module.exports = router;
