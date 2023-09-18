import { Schema, model } from 'mongoose'

interface Book {
  id: Schema.Types.ObjectId
  title: string
  author: string
  description: string
  image_url: string
  genres: string[]
  num_pages: number
}

const BookSchema = new Schema<Book>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  genres: {
    type: [String],
    required: true
  },
  num_pages: {
    type: Number,
    required: true
  }
})

export const BookModel = model('Book', BookSchema)
