import express from 'express';
import { signupController } from '../controllers/auth.js';
import { signupValidator, validatorResult } from '../middleware/validator.js';

const router = express.Router();

// signup route
router.post('/signup', signupValidator, validatorResult, signupController);

export default router;
