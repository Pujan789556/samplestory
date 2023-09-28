import { dbConfig } from '../config/dbConfig'
import mongoose, { ConnectOptions } from 'mongoose'
import { 
    userSchema, 
    storySchema,
    subjectSchema,
} from './schema'
import { 
    User,
    Story,
    Subject,
} from '../types/db-types'
import { SCHEMA_NAMES } from './constant'
import { ACLModel } from './types'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions


mongoose.connect(dbConfig.path, options)

const db = mongoose.connection
db.on('error', () => {
  // eslint-disable-next-line no-console
  console.error('Error while connecting to DB')
})

const Users = mongoose.model<User, ACLModel>(SCHEMA_NAMES.USERS, userSchema)
const Stories = mongoose.model<Story, ACLModel>(
  SCHEMA_NAMES.STORIES,
  storySchema,
)
const Subjects = mongoose.model<Subject, ACLModel>(
  SCHEMA_NAMES.SUBJECTS,
  subjectSchema,
)

export { 
    Users,
    Stories,
    Subjects,
}
