import { rule } from 'graphql-shield'
import { roleToPermission } from '../helpers/roleToPermission'
import { AppContext } from '../context'
import { Role } from '../types/resolvers-types'

const checkRole = async (ctx: AppContext, role: Role): Promise<boolean> =>
  ctx.authenticated && ctx.user.permission[roleToPermission[role]]

export const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx: AppContext) => ctx.authenticated,
)

export const isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, ctx: AppContext) => checkRole(ctx, Role.Admin),
)

export const isSharer = rule({ cache: 'contextual' })(
  async (parent, args, ctx: AppContext) => checkRole(ctx, Role.Sharer),
)
export const isModerator = rule({ cache: 'contextual' })(
  async (parent, args, ctx: AppContext) => checkRole(ctx, Role.Moderator),
)

