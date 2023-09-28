import { getSubjects  } from '../../../queries/functions/getSubjects'
import {
  QueryResolvers,
  ResolversParentTypes,
  Subject,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const subjectsQuery: QueryResolvers = async (
  parent: ResolversParentTypes,
  args: any,
  context: AppContext,
): Promise<Subject[]> => {
  return await getSubjects(context)
}
