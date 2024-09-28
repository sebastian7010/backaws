const { Schema, model } = require('mongoose');

//modelo de usuario 
const userSchema = Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
})



module.exports = model('Users', userSchema)
    //crea el modelo o estructura y se exporta