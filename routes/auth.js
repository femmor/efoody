import express from 'express';
import { signupValidator, validatorResult } from '../middleware/validator.js';

const router = express.Router();

// signup route
router.post('/signup', signupValidator, validatorResult);

export default router;
