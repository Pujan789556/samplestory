import { Permission, Role } from 'types/resolvers-types'
import { roleToPermission } from './roleToPermission'

export const removeRole = (role: Role, permission: Permission): Permission => ({
  ...permission,
  [roleToPermission[role]]: false,
})
