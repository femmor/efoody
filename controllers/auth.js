import User from '../models/user.js';
import bcrypt from 'bcryptjs';

export const signupController = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if email already exists
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errorMessage: 'Email already exists',
      });
    }

    const newUser = await User();
    newUser.username = username;
    newUser.email = email;

    // hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    res.json({
      successMessage: 'Registration successful, please sign in',
    });
  } catch (error) {
    console.log('signupController error ', error);
    res.status(500).json({ errorMessage: 'Server error.' });
  }
};
