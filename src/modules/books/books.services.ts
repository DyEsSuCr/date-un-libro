import { isValidObjectId } from 'mongoose'
import { Book } from '@/interfaces/models'
import { HTTPError } from '@/middlewares/error.handler'
import { BookModel } from '@/models/mongodb/books.model'
import { Request } from 'express'

export class ModelBook {
  static async create (body: Book): Promise<Book> {
    return await BookModel.create({ ...body })
  }

  static async findById ({ id }: { id: string }): Promise<Book | Book[]> {
    if (!isValidObjectId(id)) throw new HTTPError(400, 'BOOK_ID_INVALID')

    const book = await BookModel.findById(id)

    if (!book) throw new HTTPError(404, 'BOOK_NOT_FOUND')
    return book
  }

  static async find ({ query }: Request) {
    const { author, genres, title } = query
    const filters: Filter = {}

    if (genres) filters.genres = { $in: [genres] }
    if (author) filters.author = new RegExp('.*' + String(author) + '.*', 'i')
    if (title) filters.title = new RegExp('.*' + String(title) + '.*', 'i')

    return await BookModel.find(filters)
  }
}

interface Filter {
  author?: RegExp
  title?: RegExp
  genres?: {}
}
