 const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://milk_dairy:amar@cluster0.2hpqs.mongodb.net/milk_dairy'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db =mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB connection successful')
})

db.on('connection' , ()=>{
    console.log('Mongo DB connection  failed')
})


module.exports=mongoose