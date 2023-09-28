import dotenv from 'dotenv'
dotenv.config()
import { ApolloServer } from '@apollo/server'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { readFileSync } from 'fs'
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb'
import { resolvers } from './resolvers'
import { permissions } from './auth/permissions'
import { applyMiddleware } from 'graphql-middleware'
import { AppContext, getContext } from './context'
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' })

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: [DIRECTIVES, typeDefs],
    resolvers,
  }),
  permissions,
)

const server = new ApolloServer<AppContext>({
  schema,
})

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests()

export const graphqlHandler = startServerAndCreateLambdaHandler(server, {
  context: getContext,
})
