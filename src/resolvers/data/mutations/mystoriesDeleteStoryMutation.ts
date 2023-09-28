import { deleteStory } from '../../../queries/functions/deleteStory'
import {
  MutationResolvers,
  MutationMystoriesDeleteStoryArgs,
  ResolversParentTypes,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const mystoriesDeleteStoryMutation: MutationResolvers = async (
  parent: ResolversParentTypes,
  args: MutationMystoriesDeleteStoryArgs,
  context: AppContext,
): Promise<boolean> => {
  return await deleteStory(context, args.storyId)
}
