import { updateStory } from '../../../queries/functions/updateStory'
import { StoryDbObject } from '../../../types/db-types'
import {
   MutationMystoriesUpdateStoryArgs,
  MutationResolvers,
  ResolversParentTypes,
  Story,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const mystoriesUpdateStoryMutation: MutationResolvers = async (
  _parent: ResolversParentTypes,
  args:  MutationMystoriesUpdateStoryArgs,
  context: AppContext,
): Promise<Story> => {
  const data: StoryDbObject = args.data
  return await updateStory(context, args.storyId, data)
}
