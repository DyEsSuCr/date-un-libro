import { ModelReview } from './reviews.services'
import { responseHandler } from '@/libs/reponse.handler'
import type { NextFunction, Request, Response } from 'express'

export class RevirewsController {
  static async create ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const registerUser = await ModelReview.create({ ...body })

      responseHandler(res, 201, registerUser)
    } catch (err) {
      next(err)
    }
  }

  static async find ({ params }: Request, res: Response, next: NextFunction) {
    try {
      const logedUser = await ModelReview.find({ id: params.id })

      responseHandler(res, 200, logedUser)
    } catch (err) {
      next(err)
    }
  }
}
