import { UserDbObject } from '../../../types/db-types'
import {
  MutationUsersRemoveRoleArgs,
  Permission,
  User,
  ResolversParentTypes,
  MutationResolvers,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'
import { updateUser } from '../../../queries/functions/updateUser'
import { getUser } from '../../../queries/functions/getUser'
import { removeRole } from '../../../helpers/removeRole'

export const usersRemoveRoleMutation: MutationResolvers = async (
  parent: ResolversParentTypes,
  args: MutationUsersRemoveRoleArgs,
  context: AppContext,
): Promise<User> => {
  const user: User = await getUser(context, args.userId)
  const permission: Permission = removeRole(args.data.role, user.permission)
  const data: UserDbObject = { permission }
  return await updateUser(context, args.userId, data)
}
