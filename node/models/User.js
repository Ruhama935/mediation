const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        default: 'אנונימי'
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: String
    },
    permissions:{
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
},{
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)
