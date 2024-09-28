const express = require('express')
const router = express.Router()
const { createUser, loginUser } = require('./../controllers/user.controller')
//llama a las validaciones 
const users = require('./../middlewares/validationBody')
const validateFields = require('./../middlewares/validationResult')


//crea la ruta para crear usuarios y la llama register //validateField llama las validaciones
router.post('/register', users, validateFields, createUser)
//crea la ruta para el login
router.post('/login', loginUser)

module.exports = router