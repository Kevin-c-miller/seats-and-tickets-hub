import { ErrorRequestHandler } from 'express';

// error handler
export const errorHandler: ErrorRequestHandler = (err, req, res) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
