import express from "express";
import { graphqlHTTP } from 'express-graphql'
const app = express()


const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log(`Escuchando al puerto ${PORT}`)
})