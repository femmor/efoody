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

    // Create a new user
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;

    // hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // Save new user to database
    await newUser.save();

    // Success message response
    res.json({
      successMessage: 'Registration successful, please sign in',
    });
  } catch (error) {
    res.status(500).json({
      errorMessage:
        'Oops!. Something went wrong on the server, please try again!',
    });
  }
};
