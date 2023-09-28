import { JwtPayload } from 'jsonwebtoken'

const DELIMETER = '|'

const userData = (validatedToken: JwtPayload): string =>
  validatedToken.decoded.sub

const authId = (userData: string): string => userData.split(DELIMETER)[1]

export const getAuthId = (validatedToken: JwtPayload): string =>
  authId(userData(validatedToken))
