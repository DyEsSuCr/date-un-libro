import { Router } from 'express'
import { AuthController } from './auth.controllers'
import { schemaValidator } from '@/middlewares/schema.validator'
import { userAuthSchema } from '@/schemas/user.schema'

export const router = Router()

router.post('/signin', schemaValidator(userAuthSchema), AuthController.login)
router.post('/signup', schemaValidator(userAuthSchema), AuthController.register)
