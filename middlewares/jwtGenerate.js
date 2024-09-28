const jwt = require('jsonwebtoken')
//generar token 
const generateToken = (userData = {}) =>{
    try {
        // payload va informacion de usuario que esta en userdata
        const payload = { userData }
        //trae mi  secret:key que esta en las variables de entorno
        const secret = process.env.SECRET_KEY
        // crea el token, recibe los datos payload y la llave secreta, recibe un atributo donde el token se vence en 2horas
        const token = jwt.sign(payload, secret, {
            expiresIn: '2h'
        })
        //si todo sale bien retorna el token generado
        return token
        //error y no crea el token 
    } catch (error) {
        console.log(error)

        return false
    }
}
// exporta el objeto generar el token para poder ser utilizado en otro lugar
module.exports = {
    generateToken
}