const Reserve = require ('./../models/Reserve')

const createReserve = async(req,res) => {
    const { name,email,number,date } = req.body

    try {
        const reserve = await Reserve.findOne({name:name})
        if(reserve) return res.status(400).json({
            ok: false,
            msg: `${name} This reserve is already exist in database`
        })
        const dbReserve = new Reserve({
            name:name,
            email:email,
            number:number,
            date:date
        })
        await dbReserve.save()

        return res.status(201).json({
            ok: true,
            msg: `The reserve of user ${name} is created succesfuly`
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: true,
            msg: `contact to Developer, internal error`
        })
    }
}

const getReserveById = async(req,res) => { 
    const id = req.params.id
    try {
        const reserve = await Reserve.findById(id)
        if(!reserve) return res.status(404).json({
            ok: false,
            msg: `Reserve not found`
        })

        return res.status(200).json({
            ok: true,
            msg:` La reserva ${reserve} ha sido creada`,
            reserve: reserve
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: `Error Identify reserve for id`
        })
    }
}

const deleteReserveById = async(req,res) =>{
    const id = req.params.id
    try {
        const reserve = await Reserve.findByIdAndDelete(id)
        if(!reserve) return res.status(400).json({
            ok: false,
            msg: `Error deleting reserve with Id ${id}`
        })

        return res.status(200).json({
            ok:true,
            msg: `Reserve deleted!!`
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: `Error deleting Reserve, contact to support`
        }) 
    }
}



module.exports = {
    createReserve,
    getReserveById,
    deleteReserveById
}