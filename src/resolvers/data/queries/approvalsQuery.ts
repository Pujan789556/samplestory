import { getStories  } from '../../../queries/functions/getStories'
import {
  QueryResolvers,
  ResolversParentTypes,
  Story,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const approvalsQuery: QueryResolvers = async (
  parent: ResolversParentTypes,
  args: any,
  context: AppContext,
): Promise<Story[]> => {
  return await getStories(context)
}
