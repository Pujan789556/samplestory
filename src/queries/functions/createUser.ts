import { Users } from '../../db'
import { User, UserDbObject } from '../../types/db-types'
import { AppContext } from '../../context'

export const createUser = async (
  ctx: AppContext,
  data: UserDbObject,
): Promise<User> => {
  const user: User = await Users.create(data)
  return user
}
