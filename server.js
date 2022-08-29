const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./database/db');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);

// Connect DB
connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
