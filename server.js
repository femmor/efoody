import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './database/db.js';
import authRoutes from './routes/auth.js';

const app = express();
dotenv.config();
connectDB();

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('api/auth', authRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
