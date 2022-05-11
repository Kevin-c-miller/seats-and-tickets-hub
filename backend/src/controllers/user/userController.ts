import { RequestHandler } from 'express';
import asyncHandler from 'express-async-handler';
import User from '../../models/userModel';

// update User
export const updateUser: RequestHandler = asyncHandler(async (req, res) => {
  try {
    // grab id from url
    const { id } = req.params;

    // update the user
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: 'User updated', updatedUser });
  } catch (err) {
    res.status(400);
    throw new Error('Error updating user');
  }
});

// delete user
export const deleteUser: RequestHandler = asyncHandler(async (req, res) => {
  try {
    // grab id from url
    const { id } = req.params;

    // find user by id to delete
    const deleted = await User.findByIdAndDelete(id);

    // if delete successful
    if (deleted) {
      res.status(200).json({ message: 'user deleted', deleted });
    }
    throw new Error('user not found');
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});
