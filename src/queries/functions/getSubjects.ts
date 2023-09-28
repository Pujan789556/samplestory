import { Subjects } from '../../db'
import { Subject, SubjectDbObject } from '../../types/db-types'
import { AppContext } from '../../context'

export const getSubjects = async (
  ctx: AppContext,
  params?: SubjectDbObject,
): Promise<Subject[]> => {
  const subjects: Subject[] = await Subjects.find(params)
  return subjects
}