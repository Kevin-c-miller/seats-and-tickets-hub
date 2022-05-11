import { RequestHandler } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';

// create token
export const createToken = (id: any) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign({ id }, secret, { expiresIn: 84000 });
};

// auth function
export const authRequired: RequestHandler = (req, res, next) => {
  // grab jwt secret
  const secret = process.env.JWT_SECRET;

  // grab token
  const token = req.cookies.jwt;

  // check if token is present
  if (token) {
    jwt.verify(token, secret, (error, decodedToken) => {
      // if there is an error
      if (error) {
        return res
          .status(401)
          .json({ message: 'Auth Error' })
          .redirect('/login');
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Auth Error' });
  }
};
