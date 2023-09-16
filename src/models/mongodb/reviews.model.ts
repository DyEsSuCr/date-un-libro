import { Schema, model } from 'mongoose'

const ReviewSchema = new Schema(
  {
    review: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    bookId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const ReviewModel = model('Review', ReviewSchema)
