import { Schema, model } from 'mongoose'

interface Review {
  plot: string
  userId: Schema.Types.ObjectId
  bookId: string
}

const ReviewSchema = new Schema<Review>(
  {
    plot: {
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
