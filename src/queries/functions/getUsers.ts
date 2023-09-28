import { Users } from '../../db'
import { User, UserDbObject } from '../../types/db-types'
import { AppContext } from '../../context'

export const getUsers = async (
  ctx: AppContext,
  params?: UserDbObject,
): Promise<User[]> => {
  const users: User[] = await Users.find(params)
  return users
}
