import { Query, ResolversObject } from '../../../types/resolvers-types'
import { usersQuery } from './usersQuery'
import { mystoryQuery } from './mystoryQuery'
import { mystoriesQuery } from './mystoriesQuery'
import { approvalQuery } from './approvalQuery'
import { approvalsQuery } from './approvalsQuery'
import { subjectQuery } from './subjectQuery'
import { subjectsQuery } from './subjectsQuery'

export const queryResolvers: ResolversObject<Query> = {
  Query: {
    users: usersQuery,
    mystory: { mystoryQuery },
    mystories: { mystoriesQuery },
    approval: { approvalQuery },
    approvals: { approvalsQuery },
    subject: { subjectQuery },
    subjects: { subjectsQuery },
  },
}
