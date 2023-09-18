import { Schema, model } from 'mongoose'
import type { Review } from '@/interfaces/models'

const ReviewSchema = new Schema<Review>(
  {
    plot: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const ReviewModel = model('Review', ReviewSchema)
