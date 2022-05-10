import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import connectDB from './config/db';

const PORT = process.env.PORT || 5000;
dotenv.config();

// connect to db
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(json()); // body-parser

// routes
// app.use('/api/users', userRoutes)
// app.use('/api/events', eventRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}.`);
});
