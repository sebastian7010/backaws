const { Schema, model } = require ('mongoose')

const EventSchema = Schema ({
    name: {
        type: String,
        require: true,
        unique: true
    },
    img: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    value: {
        type: Number,
        require: true
    }
})


module.exports =  model ('Event', EventSchema)
