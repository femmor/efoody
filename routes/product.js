const express = require('express');
const productController = require('../controllers/product');
const { authenticateJWT } = require('../middleware/authenticator');

const router = express.Router();

router.post('/', authenticateJWT, productController.create);

module.exports = router;
