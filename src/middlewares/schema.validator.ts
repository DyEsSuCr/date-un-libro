import { responseHandler } from '@/libs/reponse.handler'
import { type NextFunction, type Request, type Response } from 'express'
import { type AnyZodObject } from 'zod'

export const schemaValidator = (schema: AnyZodObject) => ({ body, params, query }: Request, res: Response, next: NextFunction) => {
  const result = schema.safeParse({ body, params, query })

  if (!result.success) {
    if (result.error) return responseHandler(res, 400, result.error.issues.map((issue) => ({ error: issue })))
    responseHandler(res, 500, { error: 'INTERNAL_SERVER_ERROR' })
  }

  next()
}
