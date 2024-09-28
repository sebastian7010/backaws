const express = require('express')
const router = express.Router()
const { createEvent, getEventById, getAllEvent, deleteEventById } = require('./../controllers/event.controller')


router.post('/createEvent', createEvent)
router.get('/getEventById/:id', getEventById)
router.get('/getAllEvent', getAllEvent)
router.delete('/deleteEvent/:id', deleteEventById)

module.exports = router