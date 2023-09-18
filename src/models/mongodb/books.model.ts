import { Schema, model } from 'mongoose'
import type { Book } from '@/interfaces/models'

const BookSchema = new Schema<Book>(
  {
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
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export const BookModel = model('Book', BookSchema)
