import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

//  function to protect routes
const protect: RequestHandler = asyncHandler(async (req, res, next) => {
  // initialze token
  let token;

  //  check for the token in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // get token from header
      //  this will split into array, splitting at the space so it will look like ['bearer', 'token']
      // token will be at the 1 index
      token = req.headers.authorization.split(' ')[1];

      // verify token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {}
  }
});
