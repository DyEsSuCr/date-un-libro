import { z } from 'zod'

export const bookSchema = z.object({
  body: z.object({
    title: z.string().nonempty({ message: 'Title is required' }),
    author: z.string().nonempty({ message: 'Author is required' }),
    description: z.string().nonempty({ message: 'Description is required' }),
    image_url: z.string().nonempty({ message: 'Image URL is required' }).url().endsWith('.jpg'),
    genres: z.array(z.string()).nonempty({ message: 'Genres is required' }),
    num_pages: z.number().positive()
  })
})
