import { Router } from 'express';
import { signUpUser, loginUser } from '../controllers/auth/authController';
import { updateUser, deleteUser } from '../controllers/user/userController';

const router = Router();

// register user
router
  .post('/register', signUpUser)

  // login user
  .post('/login', loginUser)

  // update user
  .patch('/:id', updateUser)

  // delete user
  .delete('/:id', deleteUser);

export default router;
