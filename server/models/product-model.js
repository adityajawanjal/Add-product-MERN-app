const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    brand:{
        type:String
    },
    category:{
        type:String
    },
    userId:{
        type:String
    },
},{timestamps:true});

module.exports = mongoose.model("Product",productSchema);