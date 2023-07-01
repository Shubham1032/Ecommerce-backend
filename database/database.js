const mongoose = require('mongoose');
const url = "mongodb+srv://Shubham:sharma19298@ecommerce.dvpfj8i.mongodb.net/test"

const Connection = async ()=>{
    try {
        console.log("connecting to db");
        const dbResponse = await mongoose.connect(url)
        console.log("connected")
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = Connection