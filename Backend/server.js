const express = require("express");
require("dotenv").config()
const router = require('./router/auth-router')
const connectDB = require('./helpers/db')
const cors = require('cors')

const app = express();


//handling cors //
const corsOptions = {
    origin:"http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true
};

app.use(cors(corsOptions))

//for req.body undefined error//
app.use(express.json())

app.use('/api', router);

// app.get('/',(req,res)=>{
//     res.status(200).send("GOOOD SErver")
// })

connectDB().then(()=>{
    app.listen(5000,()=>{
        console.log("Server Started")
    })

})
