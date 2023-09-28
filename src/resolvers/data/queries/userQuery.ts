import { AppContext } from '../../../context'
import {
  QueryResolvers,
  ResolversParentTypes,
  User,
} from '../../../types/resolvers-types'
import { getUser } from '../../../queries/functions/getUser'

export const usersQuery: QueryResolvers = async (
  parent: ResolversParentTypes,
  args: any,
  context: AppContext,
): Promise<User> => {
  return await getUser(context)
}
