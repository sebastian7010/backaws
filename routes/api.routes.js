const express = require('express')
const router = express.Router()
//const user = require('./user.routes')
const product = require ('./product.routes')
const reserve = require ('./reserve.routes')
const event = require ('./event.routes')
//crea la ruta de la api
router.use('/api', product )
router.use('/api', reserve)
router.use('/api', event)


module.exports = router