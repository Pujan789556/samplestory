import { Users } from '../../db'
import { User, UserDbObject, Scalars } from '../../types/db-types'
import { AppContext } from '../../context'

export const getUser = async (
  ctx: AppContext,
  id?: Scalars['ID'],
): Promise<User> => {
  const user: User = await Users.findById(id)
  return user
}
