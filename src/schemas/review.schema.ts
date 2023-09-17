import { z } from 'zod'

export const reviewSchema = z.object({
  body: z.object({
    plot: z.string().nonempty({ message: 'Review is required' }),
    userId: z.string().nonempty({ message: 'UserId is required' }),
    bookId: z.string().nonempty({ message: 'BookId is required' })
  })
})
