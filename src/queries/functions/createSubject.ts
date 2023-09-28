import { Subjects } from '../../db'
import { Subject, SubjectDbObject } from '../../types/db-types'
import { AppContext } from '../../context'

export const createSubject = async (
  ctx: AppContext,
  data: SubjectDbObject,
): Promise<Subject> => {
  const subject: Subject = await Subjects.create(data)
  return subject
}
