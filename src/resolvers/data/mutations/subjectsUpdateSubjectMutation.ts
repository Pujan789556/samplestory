import { updateSubject } from '../../../queries/functions/updateSubject'
import { SubjectDbObject } from '../../../types/db-types'
import {
   MutationSubjectsUpdateSubjectArgs,
  MutationResolvers,
  ResolversParentTypes,
  Subject,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const subjectsUpdateSubjectMutation: MutationResolvers = async (
  _parent: ResolversParentTypes,
  args:  MutationSubjectsUpdateSubjectArgs,
  context: AppContext,
): Promise<Subject> => {
  const data: SubjectDbObject = args.data
  return await updateSubject(context, args.subjectId, data)
}
