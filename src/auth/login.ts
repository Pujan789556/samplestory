import request from 'request-promise'
import queryString from 'querystring'
import { AuthPayload, LoginUserInput } from '../types/resolvers-types'
import { AppContext } from '../context'
import { authConfig, authManagementConfig } from '../config/authConfig'
import { GRANT_TYPE } from './constant'
import { AuthData, AuthOptions } from './types'

const options: AuthOptions = {
  url: authConfig.authUrl,
  method: 'POST',
  headers: authConfig.headers,
}

const authData: AuthData = {
  grant_type: GRANT_TYPE,
  audience: authConfig.audience,
  client_id: authManagementConfig.clientId,
  client_secret: authManagementConfig.clientSecret,
}

export const login = async (
  ctx: AppContext,
  data: LoginUserInput,
): Promise<AuthPayload> => {
  try {
    authData.username = data.username
    authData.password = data.password
    options.body = queryString.stringify(authData)
    const body = await request(options)
    return JSON.parse(body)
  } catch (error) {
    return error
  }
}
