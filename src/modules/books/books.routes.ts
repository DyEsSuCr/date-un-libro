import { Router } from 'express'
import { BooksController } from './books.controllers'
import { schemaValidator } from '@/middlewares/schema.validator'
import { bookSchema } from '@/schemas/book.schema'

export const router = Router()

router.post('/', schemaValidator(bookSchema), BooksController.create)
router.get('/', BooksController.find)
router.get('/:id', BooksController.find)
