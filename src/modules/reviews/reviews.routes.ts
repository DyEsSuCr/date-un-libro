import { Router } from 'express'
import { RevirewsController } from './reviews.controllers'
import { schemaValidator } from '@/middlewares/schema.validator'
import { reviewSchema } from '@/schemas/review.schema'

export const router = Router()

router.post('/', schemaValidator(reviewSchema), RevirewsController.create)
router.get('/', RevirewsController.find)
router.get('/:id', RevirewsController.find)
