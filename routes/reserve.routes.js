const express = require('express')
const router = express.Router()
const { createReserve, getReserveById, deleteReserveById  } = require('./../controllers/reserve.controller')


router.post('/createReserve',createReserve)
router.get('/getReserve/:id', getReserveById)
router.delete('/deleteReserve/:id', deleteReserveById)

module.exports= router