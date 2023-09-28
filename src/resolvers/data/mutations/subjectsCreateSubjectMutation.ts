import { createSubject } from '../../../queries/functions/createSubject'
import { SubjectDbObject } from '../../../types/db-types'
import {
  MutationSubjectsCreateSubjectArgs,
  MutationResolvers,
  ResolversParentTypes,
  Subject,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const subjectsCreateSubjectMutation: MutationResolvers = async (
  parent: ResolversParentTypes,
  args: MutationSubjectsCreateSubjectArgs,
  context: AppContext,
): Promise<Subject> => {
  const data: SubjectDbObject = { ...args.data, owner: context.user.id }
  return await createSubject(context, data)
}
