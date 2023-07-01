const {Products} = require('../model/Model')
const {Users} = require('../model/Users')
const ProductData = require('../ProductData/FakeData')

// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

// const arr = [];

const tryFun = (req,res)=>{
    res.send(ProductData)
    console.log("try route works")
    res.send("routes Working")
}

const addProducts = async(req,res)=>{
    try {
        const result = await Products.insertMany(ProductData)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
const getAllProducts = async(req,res)=>{
    try {
        const result = await Products.find()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}
const getOne = async(req,res)=>{
    try {
        const id = req.params._id
        const result = await Products.findById(id)
        // console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
const getByimage = async(req,res)=>{
    try {
        const data = req.body;
        // console.log(data)
        const result = await Products.findOne({image:data.CurrentImage})
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
const familiarProduct = async(req,res)=>{
    try {
        // console.log(req.body)
        const result = await Products.find(req.body)
        // console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
// const updateProductOne = async(req,res)=>{
//     try {
//         const result = await Products.updateOne({_id:"6430aebc0447e7dd741a0ba1"},{$set:{image:"https://techcrunch.com/wp-content/uploads/2022/07/CMC_1580.jpg"}})
//         res.send(result)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// const updateMany = async(req,res)=>{
//     try {
//         const result = await Products.updateMany({category:"Mac"},{$set:{description:"Apple's MacBook Air needs no introduction. It's long been the go-to laptop for professionals and students, and in 2018, it got even better when Apple finally overhauled the design. "}})
//         res.send(result)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
const deleteAll = async(req,res)=>{
    try {
        const result = await Products.deleteMany();
        res.send(result)
    } catch (error) {
        console.log(error.message)
    }
}
module.exports={tryFun,addProducts,getAllProducts,getOne,getByimage,deleteAll,familiarProduct}