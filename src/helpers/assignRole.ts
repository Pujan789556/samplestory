import { Permission, Role } from 'types/resolvers-types'
import { roleToPermission } from './roleToPermission'

export const assignRole = (role: Role, permission: Permission): Permission => ({
  ...permission,
  [roleToPermission[role]]: true,
})
