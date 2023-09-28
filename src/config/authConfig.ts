import { AuthConfig, AuthManagementConfig } from '../auth/types'

export const authManagementConfig: AuthManagementConfig = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  domain: process.env.DOMAIN,
}

export const authConfig: AuthConfig = {
  jwksUri: `https://${process.env.DOMAIN}/.well-known/jwks.json`,
  connection: 'Username-Password-Authentication',
  authUrl: `https://${process.env.DOMAIN}/oauth/token`,
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  audience: process.env.API_IDENTIFIER,
  issuer: `https://${process.env.DOMAIN}/`,
}
