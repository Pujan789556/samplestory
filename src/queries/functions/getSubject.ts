import { Subjects } from '../../db'
import { Scalars, Subject } from '../../types/db-types'
import { AppContext } from '../../context'

export const getSubject = async (
  ctx: AppContext,
  id?: Scalars['ID'],
): Promise<Subject> => {
  const subject: Subject = await Subjects.findById(id)
  return subject
}
