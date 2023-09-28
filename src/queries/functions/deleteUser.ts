import { AppContext } from '../../context'
import { Scalars } from '../../types/resolvers-types'
import { Users } from '../../db'

export const deleteUser = async (
  ctx: AppContext,
  id: Scalars['ID'],
): Promise<boolean> => {
  const user = await Users.findOneAndDelete({
    id,
  })
  return user ? true : false
}