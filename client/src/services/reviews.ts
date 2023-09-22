import { API_URL } from '@/config/constants'

interface Review {
  _id: number
  plot: string
  userId: {
    _id: string
    username: string
  }
}

export const getReviews = async (id: string) => {
  const res = await fetch(API_URL as string + '/reviews/' + id)
  return await res.json() as Review[]
}
