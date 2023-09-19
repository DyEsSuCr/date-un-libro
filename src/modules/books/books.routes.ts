import { Router } from 'express'
import { BooksController } from './books.controllers'
import { schemaValidator } from '@/middlewares/schema.validator'
import { bookSchema } from '@/schemas/book.schema'

export const router = Router()

router.get('/:id', BooksController.findById)
router.get('/', BooksController.find)
router.post('/', schemaValidator(bookSchema), BooksController.create)
