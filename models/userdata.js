const mongoose = require ('mongoose')

const userdataSchema = new mongoose.Schema({
    userName:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Userdata',userdataSchema)