import { API_URL } from '@/config/constants'

interface Book {
  _id: number
  title: string
  image_url: string
  description: string
  author: string
  num_pages: number
  genres: string[]
}

export const getBooks = async () => {
  const res = await fetch(API_URL as string + '/books')
  return await res.json() as Book[]
}

export const getBook = async (id: string) => {
  const res = await fetch(API_URL as string + '/books/' + id)
  return await res.json() as Book
}
