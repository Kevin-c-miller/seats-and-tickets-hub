import { Schema, model, connect } from 'mongoose';

// interface for types to be included in the schema
interface User {
  userName: String;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
}

// userSchema corresponding to User interface
const userSchema = new Schema<User>(
  {
    userName: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    confirmPassword: { type: String, required: true, trim: true },
    isAdmin: false,
  },
  { timestamps: true }
);

module.exports = model<User>('User', userSchema);
