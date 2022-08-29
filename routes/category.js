const express = require('express');
const categoryController = require('../controllers/category');
const { authenticateJWT } = require('../middleware/authenticator');
const router = express.Router();

router.post('/', authenticateJWT, categoryController.create);

module.exports = router;
