import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';
import bcrypt from 'bcryptjs';
import { securePassword } from '../../utilities/securePassword';

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
        const token = createToken(newUser._id);
        res.cookie('jwt', token, { maxAge: 84000 });

        //   use secure password function to hash the new user's password
        newUser.password = await securePassword(newUser.password);
        newUser.confirmPassword = newUser.password;

        res.json({
          message: `Hi ${newUser.userName}! Welcome to my User API`,
          user: newUser._id,
        });
        //   save new user to db
        await newUser.save();

        res.status(201);
      } else {
        res.status(400);
        throw new Error('Error registering new user');
      }
    } catch (err) {
      res.status(400);
      throw new Error('Error registering new user');
    }
  }
);

// login user
export const loginUser: RequestHandler = asyncHandler(
  async (req, res, next) => {
    try {
      // destructure from req.body
      const { email, password } = req.body;

      // check for user
      const user = await User.findOne({ email });

      // if user found and pw matches
      if (user && bcrypt.compare(password, user.password)) {
        res.status(200).json({
          _id: user._id,
          userName: user.userName,
          name: user.name,
          email: user.email,
          token: createToken(user._id),
        });
      } else {
        // unauthorized
        res.status(401);
        throw new Error('Invalid Credentials');
      }
    } catch (err) {
      res.status(401);
      throw new Error('Invalid Credentials');
    }
  }
);
