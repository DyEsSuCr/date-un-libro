import { ModelUser } from './users.services'
import { responseHandler } from '@/libs/reponse.handler'
import type { NextFunction, Request, Response } from 'express'

export class UsersController {
  static async find ({ params }: Request, res: Response, next: NextFunction) {
    try {
      const user = await ModelUser.find({ id: params.id })

      responseHandler(res, 200, user)
    } catch (err) {
      next(err)
    }
  }
}
