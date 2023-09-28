import { Stories } from '../../db'
import { Story, StoryDbObject } from '../../types/db-types'
import { AppContext } from '../../context'

export const getStories = async (
  ctx: AppContext,
  params?: StoryDbObject,
): Promise<Story[]> => {
  const stories: Story[] = await Stories.find(params)
  return stories
}