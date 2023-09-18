import { Schema, model } from 'mongoose'

interface Review {
  id: Schema.Types.ObjectId
  plot: string
  userId: Schema.Types.ObjectId
  bookId: Schema.Types.ObjectId
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
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const ReviewModel = model('Review', ReviewSchema)
