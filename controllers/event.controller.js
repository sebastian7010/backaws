const Event = require ('./..//models/Event')

const createEvent = async(req, res) =>{
    const { name, img, description, value } = req.body

    try {
        const event = await Event.findOne({name:name})
        if(event) return res.status(400).json({
            ok:false,
            msg: `${name} Event is already exist in database `
        })
        const dbEvent = new Event({
            name:name,
            img:img,
            description:description,
            value:value
        })
        await dbEvent.save()
        return res.status(201).json({
            ok: true,
            msg: `${name} Event created succesfuly `
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: `contact to developer, internal error`
        })
    }
}

const getEventById = async(req,res) => {
    const id = req.params.id
    try {
        const event = await Event.findById(id)
        if(!event) return res.status(400).json({
            ok:false,
            msg: `Event not found`
        })

        return res.status(200).json({
            ok: true,
            msg: ` el evento es`,
            event: event
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: `Error Identify Event for id`
        })
    }
}

const getAllEvent = async(req,res) =>{
    try {
        const event = await Event.find()
        return res.status(200).json({
            ok: true,
            event: event
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: `Error getting events, contact to support`
        })
    }
}

const deleteEventById = async(req, res) => {
    const id = req.params.id
    try {
        const event = await Event.findByIdAndDelete(id)
        if(!event) return res.status(400).json({
            ok: false,
            msg: `Error deleting event with Id ${id}`
        })

        return res.status(200).json({
            ok:true,
            msg: `Product deleted!!`
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: `Error deleting product, contact to support`
        })   
    }
}


module.exports = {
    createEvent,
    getEventById,
    getAllEvent,
    deleteEventById
}