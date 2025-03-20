const mongoose = require('mongoose')

const statusSchema = new mongoose.Schema({
    AwaitingConfirmation:{
        type: String
    },
    Confirmed:{
        type: String
    },
    Sold:{
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Status', statusSchema)
