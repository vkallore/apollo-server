import express from 'express'
import http from 'http'

import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './schema'

const app = express()

const server = http.createServer(app)

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const apollo = new ApolloServer({ typeDefs, resolvers })

apollo.applyMiddleware({ app }) // app is from an existing express app

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${apollo.graphqlPath}`)
})
