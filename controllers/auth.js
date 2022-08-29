const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { jwtSecret, jwtExpire } = require('../config/keys');

const signupController = async (req, res) => {
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

const signinController = async (req, res) => {
  const { email, password } = req.body;

  // Check if email exists in database
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errorMessage: 'Invalid credentials.' });
    }

    // compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errorMessage: 'Invalid credentials.' });
    }

    const payload = {
      user: {
        _id: user._id,
      },
    };
    await jwt.sign(
      payload,
      jwtSecret,
      {
        expiresIn: jwtExpire,
      },
      (err, token) => {
        if (err) {
          console.log('jwt error', err);
        }

        const { _id, username, email, role } = user;

        res.json({
          token,
          user: { _id, username, email, role },
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      errorMessage:
        'Oops!. Something went wrong on the server, please try again!',
    });
  }
};

module.exports = { signupController, signinController };
