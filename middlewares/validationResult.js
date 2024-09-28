const { validationResult } = require('express-validator')

const validateFields = (req,res, next) => { 
    //analiza el cuerpo de la peticion
    const error = validationResult(req)
    //si encuentra que hay algun error en la variable error
    if(!error.isEmpty()){
        return res.status(400).json({
            ok: false,
            //mapped trae el mensaje de error que se encuentra en la variable error en validationBody.js
            msg: error.mapped()
        })
    }
    //si error esta vacio sigue su proceso normal 
    next()
}

module.exports = validateFields