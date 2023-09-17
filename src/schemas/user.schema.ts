import { z } from 'zod'

export const userAuthSchema = z.object({
  body: z.object({
    username: z.string().nonempty({ message: 'Username is required' }),
    password: z.string().nonempty({ message: 'Password is required' })
  })
})
