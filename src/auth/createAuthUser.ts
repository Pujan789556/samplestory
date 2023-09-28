import { CreateUserData, ManagementClient, User } from 'auth0'
import { authManagementConfig } from '../config/authConfig'
import { CreateUserInput } from '../types/resolvers-types'
import { AUTH_CONNECTION } from './constant'

const management = new ManagementClient(authManagementConfig)

export const createAuthUser = async (data: CreateUserInput): Promise<User> => {
  try {
    const authUserData: CreateUserData = {
      ...data,
      connection: AUTH_CONNECTION,
    }
    const user: User = await management.createUser(authUserData)
    return user
  } catch (error) {
    return error
  }
}
