import { Router } from 'express'
import { AuthController } from './auth.controllers'

export const router = Router()

router.get('/signin', AuthController.login)
router.get('/signup', AuthController.register)
