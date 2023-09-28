import { createStory } from '../../../queries/functions/createStory'
import { StoryDbObject } from '../../../types/db-types'
import {
  MutationMystoriesCreateStoryArgs,
  MutationResolvers,
  ResolversParentTypes,
  Story,
} from '../../../types/resolvers-types'
import { AppContext } from '../../../context'

export const mystoriesCreateStoryMutation: MutationResolvers = async (
  parent: ResolversParentTypes,
  args: MutationMystoriesCreateStoryArgs,
  context: AppContext,
): Promise<Story> => {
  const data: StoryDbObject = { ...args.data, owner: context.user.id }
  return await createStory(context, data)
}
