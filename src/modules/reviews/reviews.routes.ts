import { Router } from 'express'
import { ReviewController } from './reviews.controllers'
import { schemaValidator } from '@/middlewares/schema.validator'
import { reviewSchema } from '@/schemas/review.schema'

export const router = Router()

router.post('/', schemaValidator(reviewSchema), ReviewController.create)
router.get('/:id', ReviewController.find)
