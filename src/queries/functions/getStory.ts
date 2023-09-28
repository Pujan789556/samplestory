import { Stories } from '../../db'
import { Scalars, Story } from '../../types/db-types'
import { AppContext } from '../../context'

export const getStory = async (
  ctx: AppContext,
  id?: Scalars['ID'],
): Promise<Story> => {
  const story: Story = await Stories.findById(id)
  return story
}
