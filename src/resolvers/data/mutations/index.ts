import { Mutation, ResolversObject } from '../../../types/resolvers-types'
import { usersCreateUserMutation } from './usersCreateUserMutation'
import { usersAssignRoleMutation } from './usersAssignRoleMutation'
import { usersRemoveRoleMutation } from './usersRemoveRoleMutation'
import { loginMutation } from './loginMutation'


export const mutationResolvers: ResolversObject<Mutation> = {
  Mutation: {
    usersCreateUser: usersCreateUserMutation,
    usersAssignRole: usersAssignRoleMutation,
    usersRemoveRole: usersRemoveRoleMutation,
    login: loginMutation,

  },
}
