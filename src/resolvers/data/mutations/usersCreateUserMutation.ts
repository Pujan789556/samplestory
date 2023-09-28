import { createAuthUser } from '../../../auth/createAuthUser'
import {
  CreateUserInput,
  MutationResolvers,
  MutationUsersCreateUserArgs,
  ResolversParentTypes,
  User,
} from '../../../types/resolvers-types'
import { createUser } from '../../../queries/functions/createUser'
import { UserDbObject } from '../../../types/db-types'
import { AppContext } from '../../../context'
import { defaultPermission } from '../../../helpers/default'

export const usersCreateUserMutation: MutationResolvers = async (
  parent: ResolversParentTypes,
  args: MutationUsersCreateUserArgs,
  context: AppContext,
): Promise<User> => {
  const data: CreateUserInput = args.data
  const authUser = await createAuthUser(data)
  const authId = authUser.identities[0].user_id
  const userData: UserDbObject = {
    ...data,
    permission: defaultPermission,
    authId,
  }
  const user: User = await createUser(context, userData)
  return user
}
