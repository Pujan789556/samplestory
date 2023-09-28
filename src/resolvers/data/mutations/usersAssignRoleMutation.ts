import { UserDbObject } from '../../../types/db-types'
import {
  MutationUsersAssignRoleArgs,
  Permission,
  User,
  ResolversParentTypes,
  MutationResolvers,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'
import { updateUser } from '../../../queries/functions/updateUser'
import { getUser } from '../../../queries/functions/getUser'
import { assignRole } from '../../../helpers/assignRole'

export const usersAssignRoleMutation: MutationResolvers = async (
  parent: ResolversParentTypes,
  args: MutationUsersAssignRoleArgs,
  context: AppContext,
): Promise<User> => {
  const user: User = await getUser(context, args.userId)
  const permission: Permission = assignRole(args.data.role, user.permission)
  const data: UserDbObject = { permission }
  return await updateUser(context, args.userId, data)
}
