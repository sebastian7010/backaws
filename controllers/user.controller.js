const User = require('./../models/User')  //trae la informacion de User.js
//llamar la encriptacion de contraseña
const bcrypt = require('bcrypt')
// traer la informacion de jwsGenerate para generar el token
const { generateToken } = require('./../middlewares/jwtGenerate')

//funcion flecha para crear usuarios, con peticion y respuesta
const createUser = async (req, res) => {
    //desesctructura lo que espera obtener del campo obtenido del formulario s
    //usuario lo envia desde el frontend
    const { email, password } = req.body
    
    try {
        //empezar a validar buscar await para cualquier operacion en base de datos
        const user = await User.findOne({ email: email})
        //si el usuario ya esta creado bota error y indica que ese correo o usuario ya existe || con el return se acaba el flujo
        if(user) return res.status(400).json({
            ok: false,
            msg: `${email} User is already exist in database`
        })
        //hashear contraseña antes de guardar 
        //salt algoritmo fuerte de encriptacion
        const salt = bcrypt.genSaltSync()

        // crea un nuevo usuario, guarda en dbUser la infomacion de email y correo 
        const dbUser = new User({
            email: email,
            password: password
        })
        //acceder al password que se guardo y se realiza el hasheo 
        dbUser.password = bcrypt.hashSync(password, salt)

        //guarda el usuario en la base de datos 
        await dbUser.save()
        //devuelve el estado, usuario creado 201 y da respuesta
        return res.status(201).json({
            ok: true,
            msg: `${email} Created successfuly`
        })
        //si ocurre un error
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: true,
            msg: `contact to Developer, internal error`
        })
    }
}
// autenticar usuario
const loginUser = async(req, res) =>{
    //trae la informacion de usuario y contraseña y como trae informacion la saca del body
    const { email, password } = req.body
    try {
        //trae los datos de dbUser y busca el modelo User para trae la informacion de uno
        const dbUser = await User.findOne({ email })
        //si el usuario no esta, retorna un estado 400 y indica que el usuario no existe
        if(!dbUser) return res.status(400).json({
            ok:false,
            msg: `User Doesnt exist!!`
        })

        //validar contraseña trae la contraseña encriptada con la original y las compara || desencripta y vuelve a asegurar
        const validatePassword = bcrypt.compareSync(password, dbUser.password)
        //verifca si la contraseña es incorrecta y muestra mensaje de error
        if(!validatePassword) return res.status(400).json({
            ok:false,
            msg: `Incorrect password!!`
        })

        //generar token
        const token = await generateToken(dbUser._id , dbUser.email)
        
        //crea al usuario y le da la bienvenida
        return res.status(200).json({
            ok: true,
            msg: `Hola ${dbUser.email} Bienvenido a Cafe del mar!!`,
            token: token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: `please contact to development team`
        })
    }
}


module.exports = {
    createUser,
    loginUser
}