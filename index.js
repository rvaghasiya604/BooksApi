const express = require('express');
const mongoose = require('mongoose');
const route = require('./route');

//connect to mongoDB
mongoose.connect("mongodb+srv://user1:user@123@cluster0.8xofa.mongodb.net/student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("server started!!!...");
        })
    }
);
