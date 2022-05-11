import { Router } from 'express';
import { signUpUser, loginUser } from '../controllers/auth/authController';

const router = Router();

// register user
router
  .post('/', signUpUser)

  // login user
  .post('/login', loginUser);
