const mongoose = require('mongoose')
const User = require('./User')

const propertySchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
        enum: ['דירה', 'דירה + אופציות הרחבה', 'וילה','קוטג','דירת גן','פנטהאוז']
    },
    address:{
        type: String,
        required: true
    },
    buildingFloor:{
        type: Number
    },
    floor:{
        type: Number,
        required: true
    },
    rooms:{
        type: Number,
        required: true
    },
    imgs:{
        type: [String],
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    date:{
        type: Date || String,
        required: true
    },
    planImg:{
        type: String
    },
    description:{
        type: String,
        required: true
    },
    condition:{
        type: String,
        enum: ['משופץ','חדש מקבלן','חדש'],
        required: true
    },
    tags:{
        type: [String],
        enum: ['מרפסת','ממ"ד','ממ"ד נפרד','מחסן','חניה','מעלית','חצר']
    },
    comments:{
        type: String
    },
    status:{
        type: String,
        default: 'Awaiting confirmation',
        enum: ['Awaiting confirmation','Confirmed','Sold']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Property', propertySchema)
