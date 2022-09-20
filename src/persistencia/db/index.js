import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://pablo:pablo@cluster0.krjoq.mongodb.net/graphql?retryWrites=true&w=majority', {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log('Error al conectar a la base de datos')
    }
}