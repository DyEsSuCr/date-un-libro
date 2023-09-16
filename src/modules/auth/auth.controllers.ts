import { AuthServices } from '@/modules/auth/auth.services'
import { responseHandler } from '@/libs/reponse.handler'
import type { Request, Response } from 'express'

export class AuthController {
  static async register (req: Request, res: Response) {
    const registerUser = await AuthServices.signup()
    responseHandler(res, 201, registerUser)
  }

  static async login (req: Request, res: Response) {
    const logedUser = await AuthServices.signin()
    responseHandler(res, 200, logedUser)
  }
}
