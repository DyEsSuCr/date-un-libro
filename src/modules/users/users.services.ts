import { isValidObjectId } from 'mongoose'
import { HTTPError } from '@/middlewares/error.handler'
import { UserModel } from '@/models/mongodb/users.model'
import { User } from '@/interfaces/models'

export class ModelUser {
  static async find ({ id }: { id: string }): Promise<User> {
    if (!isValidObjectId(id)) throw new HTTPError(400, 'USER_ID_INVALID')

    const user = await UserModel.findById(id)

    if (!user) throw new HTTPError(404, 'USER_NOT_FOUND')
    return user
  }
}
