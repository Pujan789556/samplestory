import { shield, or } from 'graphql-shield'
import {
  isAdmin,
  isSharer,
  isModerator,
} from './rules'

export const permissions = shield({
  Query: {
    users: isAdmin,
    user: isAdmin,
    mystory: isSharer,
    mystories: isSharer,
    approval: isModerator,
    approvals: isModerator,
    subject: isModerator,
    subjects: isModerator,
  },
  Mutation: {
    mystoriesCreateStory:  isSharer,
    subjectsCreateSubject:  isModerator,
    mystoriesUpdateStory:  isSharer,
    approvalsUpdateStory:  isModerator,
    subjectsUpdateSubject:  isModerator,
    mystoriesDeleteStory: isSharer,
    subjectsDeleteSubject: isModerator,

    usersCreateUser: isAdmin,
    usersAssignRole: isAdmin,
    usersRemoveRole: isAdmin,
  },
})
