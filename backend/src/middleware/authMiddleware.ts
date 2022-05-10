import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel';

interface JwtPayload {
  id: string;
}

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
      // this will split into array, splitting at the space so it will look like ['bearer', 'token']
      // token will be at the 1 index
      token = req.headers.authorization.split(' ')[1];

      // verify token
    //   const { id } = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // get the user from token using that decodedTOken variable(has an id)and excluding the pw using 'select' keyword and minus sign pw
      req.user = await User.findById(id).select('-password');

      // call next function
      next();
    } catch (err) {
      console.error(err);
      res.status(401);
      throw new Error('Not Authorized');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized');
  }
});
