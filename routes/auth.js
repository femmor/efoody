import express from 'express';

const router = express.Router();

// signup route
router.post('/signup', (req, res) => {
  console.log('Signup router');
});

export default router;
