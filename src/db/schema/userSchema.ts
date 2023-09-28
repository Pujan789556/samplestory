import mongoose from 'mongoose'
import { ACLPlugin } from '../acl'
import { parseData } from '../helper'

const userSchema: mongoose.Schema = new mongoose.Schema({
  authId: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  permission: {
    type: mongoose.SchemaTypes.String,
    get: parseData,
    set: JSON.stringify,
  },
})

userSchema.plugin(ACLPlugin)

export { userSchema }
