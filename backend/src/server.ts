import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import colors from 'colors';
import path from 'path';

const PORT = process.env.PORT || 5000;

const app = express();

// error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}.`);
});
