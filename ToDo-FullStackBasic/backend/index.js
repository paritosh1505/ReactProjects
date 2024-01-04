const express = require('express')
const z = require('zod')
const { Zodfield } = require("./zodverfication")
const Todoschema = require('./db')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.post('/',async(req,res) => {
   

    const payload = req.body;
    const parsingpayload =Zodfield.safeParse(payload)
    if(parsingpayload.success !=true) {
    res.status(200).send({message:"nvalid data type"})
    return
    }
    await Todoschema.create({
        title:payload.title,
        desc:payload.desc
    })
    res.json({message:"Table Created"})
   
})

app.post('/todos',async(req,res) => {
    const value =  await Todoschema.find()
    res.status(200).json(value)
    
})


app.listen(3000,() =>{
    console.log("Server started on port 3000")
})

