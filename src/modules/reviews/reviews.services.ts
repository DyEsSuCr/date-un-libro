import type { Review } from '@/interfaces/models'
import { ReviewModel } from '@/models/mongodb/reviews.model'

export class ModelReview {
  static async find ({ id }: { id?: string }) {
    if (id) return await ReviewModel.find({ bookId: id }).populate('userId').select(['-password'])

    return await ReviewModel.find()
  }

  static async create ({ plot, userId, bookId }: Review) {
    return await ReviewModel.create({ plot, userId, bookId })
  }
}
