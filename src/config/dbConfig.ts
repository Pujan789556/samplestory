import { DatabaseConfig } from '../db/types'

export const dbConfig: DatabaseConfig = {
  type: process.env.DB_TYPE,
  path: process.env.DB_PATH,
}
