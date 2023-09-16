import { Schema, model } from 'mongoose'

const UserSchema = new Schema(
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
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const UserModel = model('User', UserSchema)
