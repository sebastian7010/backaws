//conectar con express y poner nombre de base de datos backend-csv-proyect
//se crean variables de entorno 
const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI

const connectDatabase = async() => {
    try{
        await mongoose.connect(mongoUri)
        console.log('database Connected')
    } catch(error){
        console.log(error)
    }
}

module.exports = connectDatabase;