import { Subjects } from '../../db'
import { Subject, SubjectDbObject, Scalars } from '../../types/db-types'
import { AppContext } from '../../context'

export const updateSubject = async (
  ctx: AppContext,
  id: Scalars['ID'],
  data: SubjectDbObject,
): Promise<Subject> => {
  const subject: Subject = await Subjects.checkOwnership(
    id,
    ctx.user.id,
  ).findOneAndUpdate({ id }, data, { new: true })
  return subject
}
