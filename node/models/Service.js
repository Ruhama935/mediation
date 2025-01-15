const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    icon:{
        type: String,
        required: true
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Service', serviceSchema)
