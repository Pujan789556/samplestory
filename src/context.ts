import { isTokenValid } from './auth/validate'
import { JwtPayload } from 'jsonwebtoken'
import { User } from './types/resolvers-types'
import { LambdaContextFunctionArgument } from '@as-integrations/aws-lambda'
import { getAuthId } from './auth/tokens'
import { getUsers } from './queries/functions/getUsers'

const userFromAuthId = async (authId: string): Promise<User> => {
  const users: User[] = await getUsers(null, { authId })
  return users[0]
}

export interface AppContext {
  authenticated: boolean
  user: User
}

export const getContext = async ({
  event,
}: LambdaContextFunctionArgument): Promise<AppContext> => {
  const token = event.headers.authorization
  const validatedToken: JwtPayload = await isTokenValid(token)
  if (validatedToken.error) {
    return {
      authenticated: false,
      user: null,
    }
  }
  const authId: string = getAuthId(validatedToken)
  const user: User = await userFromAuthId(authId)

  return {
    authenticated: true,
    user,
  }
}
