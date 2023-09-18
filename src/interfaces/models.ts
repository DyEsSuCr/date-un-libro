import { Schema } from 'mongoose'

export interface Book {
  id: Schema.Types.ObjectId
  title: string
  author: string
  description: string
  image_url: string
  genres: string[]
  num_pages: number
}

export interface Review {
  id: Schema.Types.ObjectId
  plot: string
  userId: Schema.Types.ObjectId
  bookId: Schema.Types.ObjectId
}

export interface User {
  id: Schema.Types.ObjectId
  username: string
  password: string
}
