const { body } = require('express-validator') //validar los usuarios 

const users = [
    //validar que no envie cadena de texto vacia
    //tiene que llenar el espacio con un correo  .normalizeEmail().notEmpty() valida que sea un email y que no este vacio
    body('email', 'Ups!! Email is required').normalizeEmail().notEmpty(),
    //verifica que se ingrese un email
    body('email', 'Email is invalid!!').normalizeEmail().isEmail(),
    //valida que la contraseña sea fuerte
    body('password', 'Hey!! Password must contain at least, uppercase, lowercase, numbers and characters').isStrongPassword()
]

module.exports = users