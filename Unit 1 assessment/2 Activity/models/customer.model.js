const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true,
        unique: true
    },
    last_name: {type: String},
    gender: {
        type: String   
    },
    age: {
        type: Number
    }         
},{
    versionKey: false
})

module.exports = mongoose.model('customers', customerSchema)