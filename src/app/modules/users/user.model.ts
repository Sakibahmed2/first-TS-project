import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'faculty'],
      required: true,
    },
    status: {
      type: String,
      enum: ['in-progress', 'block'],
      default: 'in-progress',
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
