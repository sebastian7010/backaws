const { Schema, model } = require('mongoose');

const reserveSchema = Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    date: {
        type: String,
        require: false
    }
})

module.exports = model('Reserve', reserveSchema)