const mongoose = require('mongoose')

const recommendationSchema = new mongoose.Schema({
    body:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String
    },
    email:{
        type: String
    },
    status:{
        type: String,
        default: 'Awaiting confirmation',
        enum: ['Awaiting confirmation','Confirmed']
    }
},{
    timestamps: true
})
module.exports = mongoose.model('Recommendation', recommendationSchema)
