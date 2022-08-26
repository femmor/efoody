const express = require('express');
const { signupController, signinController } = require('../controllers/auth');
const {
  signupValidator,
  signinValidator,
  validatorResult,
} = require('../middleware/validator');

const router = express.Router();

// signup route
router.post('/signup', signupValidator, validatorResult, signupController);

// signin route
router.post('/signin', signinValidator, validatorResult, signinController);

module.exports = router;
