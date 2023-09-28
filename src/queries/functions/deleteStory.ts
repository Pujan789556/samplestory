import { AppContext } from '../../context'
import { Scalars } from '../../types/resolvers-types'
import { Stories } from '../../db'

export const deleteStory = async (
  ctx: AppContext,
  id: Scalars['ID'],
): Promise<boolean> => {
  const story = await Stories.checkOwnership(id, ctx.user.id).findOneAndDelete({
    id,
  })
   return story ? true : false
}