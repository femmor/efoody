import express from 'express';
import { signupController, signinController } from '../controllers/auth.js';
import {
  signupValidator,
  signinValidator,
  validatorResult,
} from '../middleware/validator.js';

const router = express.Router();

// signup route
router.post('/signup', signupValidator, validatorResult, signupController);

// signin route
router.post('/signin', signinValidator, validatorResult, signinController);

export default router;
