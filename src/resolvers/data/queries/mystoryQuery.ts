import { getStory } from '../../../queries/functions/getStory'
import {
  QueryResolvers,
  ResolversParentTypes,
  Story,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const mystoryQuery: QueryResolvers = async (
  parent: ResolversParentTypes,
  args: any,
  context: AppContext,
): Promise<Story> => {
  return await getStory(context)
}
