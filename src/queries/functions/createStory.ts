import { Stories } from '../../db'
import { Story, StoryDbObject } from '../../types/db-types'
import { AppContext } from '../../context'

export const createStory = async (
  ctx: AppContext,
  data: StoryDbObject,
): Promise<Story> => {
  const story: Story = await Stories.create(data)
  return story
}
