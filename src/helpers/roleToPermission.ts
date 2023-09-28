import { Role } from '../types/resolvers-types'

export const roleToPermission = {
  [Role.Sharer]: 'isSharer',
  [Role.Moderator]: 'isModerator',
}
