import mongoose from 'mongoose'

export const ACLPlugin = (schema: mongoose.Schema): void => {
  schema.statics.checkOwnership = function (
    id: string,
    owner: string,
  ): mongoose.Document {
    return this.findOne({ id, owner })
  }
}
