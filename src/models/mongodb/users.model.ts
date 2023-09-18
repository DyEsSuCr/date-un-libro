import { Schema, model } from 'mongoose'
import type { User } from '@/interfaces/models'

const UserSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel = model('User', UserSchema)
