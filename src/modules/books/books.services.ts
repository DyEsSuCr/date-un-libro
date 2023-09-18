import { Book } from '@/interfaces/models'
import { BookModel } from '@/models/mongodb/books.model'

export class ModelBook {
  static async create (body: Book) {
    return await BookModel.create({ ...body })
  }
}
