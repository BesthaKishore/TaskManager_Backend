import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from "cors";
import ConnectDb from './config/mogodb.js';
import taskRoutes from "./routes/taskRoutes.js"
import { model } from 'mongoose';

// Load env variables
dotenv.config();

// Initialize app
const app = express();
const port = process.env.PORT || 3000;

// Connect to DB
ConnectDb();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/task', taskRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;