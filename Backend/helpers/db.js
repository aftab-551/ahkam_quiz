const mongoose = require("mongoose")
// require("dotenv").config()

const URI = process.env.MONGO_URI

const connectDB = async()=>{
    
    try{
        await mongoose.connect(URI,{dbName:'deen'})
        console.log("connection good")
    }catch(e){
        console.log("database not goot")
        
    }
}

module.exports = connectDB