const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGOOSE_URL)
const userSchema =new mongoose.Schema({
title:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
}    
})

const Todoschema = mongoose.model('schematodo',userSchema)
module.exports = Todoschema