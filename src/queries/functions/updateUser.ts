import { AppContext } from '../../context'
import { Users } from '../../db'
import { Scalars, User, UserDbObject } from '../../types/db-types'

export const updateUser = async (
  ctx: AppContext,
  id: Scalars['ID'],
  data: UserDbObject,
): Promise<User> => {
  const user: User = await Users.findOneAndUpdate({ id }, data, { new: true })
  return user
}
