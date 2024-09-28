const { Schema, model } = require ('mongoose')

const productSchema = Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    feature: {
        type: Boolean,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
})

module.exports =  model ('Product', productSchema)
