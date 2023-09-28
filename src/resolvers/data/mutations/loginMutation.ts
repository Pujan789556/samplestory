import { AppContext } from '../../../context'
import {
  AuthPayload,
  LoginUserInput,
  MutationLoginArgs,
  MutationResolvers,
  ResolversParentTypes,
} from '../../../types/resolvers-types'
import { login } from '../../../auth/login'

export const loginMutation: MutationResolvers = async (
  _parent: ResolversParentTypes,
  args: MutationLoginArgs,
  context: AppContext,
): Promise<AuthPayload> => {
  const data: LoginUserInput = args.data
  const authPayload: AuthPayload = await login(context, data)
  return authPayload
}
