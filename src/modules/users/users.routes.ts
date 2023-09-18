import { Router } from 'express'
import { UsersController } from './users.controllers'

export const router = Router()

router.get('/:id', UsersController.find)
