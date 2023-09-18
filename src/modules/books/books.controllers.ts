import { ModelBook } from './books.services'
import { responseHandler } from '@/libs/reponse.handler'
import type { NextFunction, Request, Response } from 'express'

export class BooksController {
  static async create ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const registeredBook = await ModelBook.create({ ...body })

      responseHandler(res, 201, registeredBook)
    } catch (err) {
      next(err)
    }
  }

  static async find ({ params }: Request, res: Response, next: NextFunction) {
    try {
      const books = await ModelBook.find({ id: params.id })

      responseHandler(res, 200, books)
    } catch (err) {
      next(err)
    }
  }
}
