import express from 'express';
import dotenv from "dotenv"
import { connectDB } from "./database/db.js"


const app = express();
dotenv.config()
connectDB()

app.get('/', (req, res) => {
  res.send('Hello eFoody!')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})