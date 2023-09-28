import { getSubject } from '../../../queries/functions/getSubject'
import {
  QueryResolvers,
  ResolversParentTypes,
  Subject,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const subjectQuery: QueryResolvers = async (
  parent: ResolversParentTypes,
  args: any,
  context: AppContext,
): Promise<Subject> => {
  return await getSubject(context)
}
