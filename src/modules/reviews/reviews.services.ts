import type { Review } from '@/interfaces/models'
import { HTTPError } from '@/middlewares/error.handler'
import { ReviewModel } from '@/models/mongodb/reviews.model'

export class ModelReview {
  static async find ({ id }: { id?: string }) {
    if (id) {
      const review = await ReviewModel.find({ bookId: id }).populate('userId').select(['-password'])
      if (!review) throw new HTTPError(404, 'REVIEW_NOT_FOUND')
      return review
    }

    return await ReviewModel.find()
  }

  static async create ({ plot, userId, bookId }: Review) {
    return await ReviewModel.create({ plot, userId, bookId })
  }
}
