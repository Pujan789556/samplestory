import { mergeResolvers } from '@graphql-tools/merge'
import { Resolvers } from '../types/resolvers-types'
import { actionResolvers } from './actions'
import { mutationResolvers } from './data/mutations'
import { queryResolvers } from './data/queries'

const resolversArray = [queryResolvers, mutationResolvers, actionResolvers]

export const resolvers: Resolvers = mergeResolvers(resolversArray)
