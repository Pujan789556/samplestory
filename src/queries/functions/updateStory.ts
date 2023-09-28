import { Stories } from '../../db'
import { Story, StoryDbObject, Scalars } from '../../types/db-types'
import { AppContext } from '../../context'

export const updateStory = async (
  ctx: AppContext,
  id: Scalars['ID'],
  data: StoryDbObject,
): Promise<Story> => {
  const story: Story = await Stories.checkOwnership(
    id,
    ctx.user.id,
  ).findOneAndUpdate({ id }, data, { new: true })
  return story
}
