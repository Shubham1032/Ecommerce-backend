const route=require('express').Router();
const productController = require('../controller/tryControler')
const userController = require("../controller/UserControllers")

                        //    Produts routes
                        
route.get("/tryFun",productController.tryFun)
route.get("/",productController.getAllProducts)
route.post("/addProducts",productController.addProducts)
// route.put("/updateOne",productController.updateProductOne)
// route.put("/updateMany",productController.updateMany)
route.get("/singleProduct/:_id",productController.getOne)
route.post('/getByimage',productController.getByimage)
route.get('/deleteAll',productController.deleteAll)
route.post("/getBycategory",productController.familiarProduct)

                    //       user routes

route.post("/register",userController.register)
route.post("/login",userController.login)
route.put("/cartProduct",userController.cartProducts)
route.post("/getUserDetails",userController.findUser)
route.post("/deleteCartObj",userController.singleCartObj)
module.exports = route;
