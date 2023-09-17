import { AuthServices } from './auth.services'
import { responseHandler } from '@/libs/reponse.handler'
import type { NextFunction, Request, Response } from 'express'

export class AuthController {
  static async register ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = body
      const registerUser = await AuthServices.signup({ username, password })

      responseHandler(res, 201, registerUser)
    } catch (err) {
      next(err)
    }
  }

  static async login ({ body }: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = body
      const logedUser = await AuthServices.signin({ username, password })

      responseHandler(res, 200, logedUser)
    } catch (err) {
      next(err)
    }
  }
}
