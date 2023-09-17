import { comparePass, encryptPass } from '@/libs/bcrypt.handler'
import { generateToken } from '@/libs/jwt.handler'
import { HTTPError } from '@/middlewares/error.handler'
import { UserModel } from '@/models/mongodb/users.model'

interface Auth {
  username: string
  password: string
}

export class AuthServices {
  static async signup ({ username, password }: Auth) {
    const userFound = await UserModel.findOne({ username })
    if (userFound) throw new HTTPError(409, 'USER_ALREADY_EXISTS')

    const passwordHash = await encryptPass(password)
    const registeredUser = await UserModel.create({
      password: passwordHash,
      username
    })

    return {
      user: {
        id: registeredUser.id,
        username: registeredUser.username
      }
    }
  }

  static async signin ({ username, password }: Auth) {
    const userFound = await UserModel.findOne({ username })
    if (!userFound) throw new HTTPError(404, 'USER_NOT_FOUND')

    const matchPassowrd = await comparePass(password, userFound.password)
    if (!matchPassowrd) throw new HTTPError(401, 'INVALID_PASSWORD')

    return {
      token: generateToken(userFound.id),
      user: {
        id: userFound.id,
        username: userFound.username
      }
    }
  }
}
