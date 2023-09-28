import { AppContext } from '../../../context'
import {
  QueryResolvers,
  ResolversParentTypes,
  User,
} from '../../../types/resolvers-types'
import { getUsers } from '../../../queries/functions/getUsers'

export const usersQuery: QueryResolvers = async (
  parent: ResolversParentTypes,
  args: any,
  context: AppContext,
): Promise<User[]> => {
  return await getUsers(context)
}
