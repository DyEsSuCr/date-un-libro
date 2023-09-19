import { isValidObjectId } from 'mongoose'
import type { Review } from '@/interfaces/models'
import { HTTPError } from '@/middlewares/error.handler'
import { ReviewModel } from '@/models/mongodb/reviews.model'

export class ModelReview {
  static async create ({ plot, userId, bookId }: Review): Promise<Review> {
    return await ReviewModel.create({ plot, userId, bookId })
  }

  static async find ({ id }: { id?: string }): Promise<Review | Review[]> {
    if (!isValidObjectId(id)) throw new HTTPError(400, 'REVIEW_ID_INVALID')

    if (!id) return await ReviewModel.find()

    const review = await ReviewModel.find({ bookId: id }).populate('userId').select(['-password'])

    if (review.length === 0) throw new HTTPError(404, 'REVIEW_NOT_FOUND')
    return review
  }
}
