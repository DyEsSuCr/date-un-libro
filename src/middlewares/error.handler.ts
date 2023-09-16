import { responseHandler } from '@/libs/reponse.handler'
import type { NextFunction, Request, Response } from 'express'

export class HTTPError extends Error {
  statusCode: number
  message: string

  constructor (statusCode: number, message: string) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

export const handleErrorMiddleware = (error: HTTPError, _req: Request, res: Response, _next: NextFunction): void => {
  if (error instanceof HTTPError) {
    const { statusCode, message } = error
    responseHandler(res, statusCode, { statusCode, message })
  } else {
    responseHandler(res, 500, { statusCode: 500, message: 'INTERNAL_SERVER_ERROR' })
  }
}
