import mongoose from "mongoose";
import 'dotenv/config'

const MONGO_PASS=process.env.MONGO_PASS
const MONGO_DB=process.env.MONGO_DB
const MONGO_USER=process.env.MONGO_USER

export async function connectDB() {
    try {
        await mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.krjoq.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('Error al conectar a la base de datos')
    }
}