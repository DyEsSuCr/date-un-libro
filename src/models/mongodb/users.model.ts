import { Schema, model } from 'mongoose'

interface User {
  id: Schema.Types.ObjectId
  username: string
  password: string
}

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
