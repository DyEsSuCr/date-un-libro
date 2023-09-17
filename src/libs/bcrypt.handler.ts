import { hash, compare } from 'bcryptjs'

export const encryptPass = async (password: string) => await hash(password, 8)
export const comparePass = async (password: string, passwordHash: string) => await compare(password, passwordHash)
