import jwt, { JwtPayload } from 'jsonwebtoken'
import jwskClient from 'jwks-rsa'
import { authConfig } from '../config/authConfig'
import { CRYPTO_ALGORITHM } from './constant'

const client = jwskClient({
  jwksUri: authConfig.jwksUri,
})

const getKey = (header, callback): void => {
  client.getSigningKey(header.kid, function (error, key) {
    const signingKey = key.getPublicKey()
    callback(null, signingKey)
  })
}

export const isTokenValid = async (token: string): Promise<JwtPayload> => {
  if (token) {
    const bearerToken = token.split(' ')
    const result = new Promise((resolve) => {
      jwt.verify(
        bearerToken[1],
        getKey,
        {
          audience: authConfig.audience,
          issuer: authConfig.issuer,
          algorithms: [CRYPTO_ALGORITHM],
        },
        (error, decoded) => {
          if (error) {
            resolve({ error })
          }
          if (decoded) {
            resolve({ decoded })
          }
        },
      )
    })
    return result
  }
  return { error: 'No token is provided' }
}
