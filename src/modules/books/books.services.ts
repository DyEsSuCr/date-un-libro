import { Book } from '@/interfaces/models'
import { HTTPError } from '@/middlewares/error.handler'
import { BookModel } from '@/models/mongodb/books.model'

export class ModelBook {
  static async create (body: Book) {
    return await BookModel.create({ ...body })
  }

  static async find ({ id }: { id?: string }) {
    if (id) {
      const book = await BookModel.findOne({ id })
      if (!book) throw new HTTPError(404, 'BOOK_NOT_FOUND')
      return book
    }

    return await BookModel.find()
  }
}
