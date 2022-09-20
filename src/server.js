import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import {makeExecutableSchema} from '@graphql-tools/schema'
import {typeDefs} from './graphql/schema.js'
import {resolvers} from './graphql/resolvers.js'

const schema = makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})

const app = express()

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}))

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log(`Escuchando al puerto ${PORT}`)
})