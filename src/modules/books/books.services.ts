import { isValidObjectId } from 'mongoose'
import { Book } from '@/interfaces/models'
import { HTTPError } from '@/middlewares/error.handler'
import { BookModel } from '@/models/mongodb/books.model'

export class ModelBook {
  static async create (body: Book): Promise<Book> {
    return await BookModel.create({ ...body })
  }

  static async find ({ id }: { id?: string }): Promise<Book | Book[]> {
    if (!isValidObjectId(id)) throw new HTTPError(400, 'BOOK_ID_INVALID')

    if (!id) return await BookModel.find()

    const book = await BookModel.findById(id)

    if (!book) throw new HTTPError(404, 'BOOK_NOT_FOUND')
    return book
  }
}
