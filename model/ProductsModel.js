const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    // Stock:{
    //     type:Number,
    //     require:true,
    //     default:1,
    //     maxlength:3
    // },
    image:{
        type:String,
        require:true 
    },
    rating:{
        type:Number,
        default:0 
    },
    price:{
        type:Number,
        require:true,
        maxlength:6 
    },
    category:{
        type:String,
        require:[true,"You did not set category"] 
    },
    description:{
        type:String,
        require:[true,"please describe your product"]
    },
    count:{
        type:Number
    }
    // createdData:{
    //     type:Date,
       
    //     default: Date.now() 
    // },
})
const Products = mongoose.model('products',productSchema);
module.exports = {Products} 