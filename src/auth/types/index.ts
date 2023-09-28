import { ParsedUrlQueryInput } from 'querystring'

export interface AuthConfig {
  jwksUri: string
  connection: string
  authUrl: string
  headers: { [key: string]: string }
  audience: string
  issuer: string
}

export interface AuthManagementConfig {
  clientId: string
  clientSecret: string
  domain: string
}

export interface AuthData extends ParsedUrlQueryInput {
  grant_type: string
  audience: string
  client_id: string
  client_secret: string
  username?: string
  password?: string
}

export interface AuthOptions {
  url: string
  method: string
  headers: { [key: string]: string }
  body?: string
}
