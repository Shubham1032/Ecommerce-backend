const {Products} = require('../model/Model')
const {Users} = require('../model/Users');

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const arr = [];
const cartProducts = async (req,res) => {
    try {
        const userCart  = req.body;
        const userResult = await Users.findById(userCart.userId)
        // console.log(userResult)
        const productResult = await Products.findById(userCart.productID)
        const process = userResult.cartDetail.push(productResult)
        userResult.save(); 
        res.send("updated")
    } catch (error) {
        console.log(error.message)
    }

}
const register = async(req,res)=>{
    try {
        const name = req.body.name
        const password = req.body.password;
        const hashpassword = await bcrypt.hash(password,10)
        const obj ={
            name:name,
            email:req.body.email,
            phone:req.body.phone,
            password:hashpassword
        }
        const result = await Users.insertMany(obj)
        arr.push(obj)
        res.send(" Registeration Successfull")
    } catch (error) {
        console.log(error.message)
    }
}

const login =async (req,res)=>{
     try {
        const detail= req.body.obj;    
        const userExist = await Users.findOne({email:detail.name});
      if(userExist){
            bcrypt.compare(detail.password,userExist.password,(err,data)=>{
                if(data){
               jwt.sign({userExist},"sharma",(err,token)=>{
                   if(token){
                       res.json({token,userExist})
                   }else{
                       res.send(err)
                   }
               })}else{ console.log(err) }
           });
      }else{ res.send("dont exist") }
     } catch (error) {   console.log(error.massage)     }
}
const findUser = async(req,res)=>{
    try {
        console.log(req.body)
        const id = req.body;
        const result = await Users.findById(id._id)
        console.log(result)
        res.send(result)        
    } catch (error) {
        console.log(error.message)
    }
}
const singleCartObj = async(req,res)=>{
    try {
        console.log(req.body);
        const userId = req.body[0];
        const productObj = req.body[1];
        const result = await Users.findById(userId);
        console.log(result);
        result.cartDetail.splice(result.cartDetail.indexOf(productObj),1)
        result.save();
        res.send("deleted")

    } catch (error) {
        console.log(error.message)
    }
}
const getUser = (req,res)=>{
    
}
module.exports = {cartProducts,register,login,findUser,singleCartObj}