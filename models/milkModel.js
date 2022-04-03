const mongoose = require("mongoose");

const milkSchema = mongoose.Schema({

    name : {type:String , require},
    varients : [],
    prices : [],
    category : {type : String , require},
    image : {type : String , require},
    description : {type:String , require}

},{
    timestamps:true,
})

const milkModel = mongoose.model('milks',milkSchema)

module.exports = milkModel