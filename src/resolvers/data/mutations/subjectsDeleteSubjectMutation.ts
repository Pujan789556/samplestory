import { deleteSubject } from '../../../queries/functions/deleteSubject'
import {
  MutationResolvers,
  MutationSubjectsDeleteSubjectArgs,
  ResolversParentTypes,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const subjectsDeleteSubjectMutation: MutationResolvers = async (
  parent: ResolversParentTypes,
  args: MutationSubjectsDeleteSubjectArgs,
  context: AppContext,
): Promise<boolean> => {
  return await deleteSubject(context, args.subjectId)
}
