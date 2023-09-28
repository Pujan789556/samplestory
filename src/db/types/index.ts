import mongoose, { Model } from 'mongoose'

export interface DatabaseConfig {
  type: string
  path: string
}

export interface ACLModel extends Model<any> {
  checkOwnership(id: string, owner: string): mongoose.Document & ACLModel
}
