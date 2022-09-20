import express from "express";
import { graphqlHTTP } from 'express-graphql'
import {makeExecutableSchema} from '@graphql-tools/schema'
import {typeDefs} from 'schema.js'
import {resolvers} from 'resolvers.js'

const schema = makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})

const app = express()

app.use('/graphql',graphqlHTTP({
    schema:schema
}))

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log(`Escuchando al puerto ${PORT}`)
})