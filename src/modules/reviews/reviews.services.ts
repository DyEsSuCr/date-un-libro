import { ReviewModel } from '@/models/mongodb/reviews.model'
import { Schema } from 'mongoose'

interface Review {
  plot: string
  userId: Schema.Types.ObjectId
  bookId: string
}

export class ModelReview {
  static async find ({ id }: { id?: string }) {
    if (id) return await ReviewModel.find({ bookId: id }).populate('userId').select(['-password'])

    return await ReviewModel.find()
  }

  static async create ({ plot, userId, bookId }: Review) {
    return await ReviewModel.create({ plot, userId, bookId })
  }
}
