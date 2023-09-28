import { AppContext } from '../../context'
import { Scalars } from '../../types/resolvers-types'
import { Subjects } from '../../db'

export const deleteSubject = async (
  ctx: AppContext,
  id: Scalars['ID'],
): Promise<boolean> => {
  const subject = await Subjects.checkOwnership(id, ctx.user.id).findOneAndDelete({
    id,
  })
   return subject ? true : false
}