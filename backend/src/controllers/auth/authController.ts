import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';
import bcrypt from 'bcryptjs';

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
    jwt.verify(token, secret, (error: any, decodedToken: any) => {
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

// Sign up a user
export const signUpUser: RequestHandler = asyncHandler(
  async (req, res, next) => {
    try {
      // destructure of of the req body
      const { userName, name, email, password, confirmPassword, isAdmin } =
        req.body;

      // check to make sure all fields filled out
      if (!userName || !name || !email || !password || !confirmPassword) {
        throw new Error('Please fill out all fields');
      }

      // check if user already exists
      const existingUser = await User.findOne({ email });

      // if user exists
      if (existingUser) {
        res.status(400);
        throw new Error('User with that email already exists');
      }

      // hash password
      const salt = await bcrypt.genSalt(10); // adding 10 random chars
      const hashedPassword = await bcrypt.hash(password, salt); // hash pw w/ special/extra 10 chars

      // create the new user
      const newUser = new User({
        userName,
        name,
        email,
        password,
        confirmPassword,
        isAdmin,
      });

      // if user successfully created
      if (newUser) {
      }
    } catch (err) {}
  }
);
