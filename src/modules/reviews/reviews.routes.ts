import { Router } from 'express'
import { RevirewsController } from './reviews.controllers'
import { schemaValidator } from '@/middlewares/schema.validator'
import { reviewSchema } from '@/schemas/review.schema'

export const router = Router()

router.post('/', schemaValidator(reviewSchema), RevirewsController.create)
router.get('/', schemaValidator(reviewSchema), RevirewsController.find)
router.get('/:id', schemaValidator(reviewSchema), RevirewsController.find)
