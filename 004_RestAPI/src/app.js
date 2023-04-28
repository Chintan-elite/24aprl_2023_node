const mongoose  =require("mongoose")
const express = require("express")
const app = express()

const PORT = 3000;
const url = "mongodb+srv://chintantops:chintantops@cluster0.ytbhtsd.mongodb.net/myapp?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("db connected !!!");
})

const Student = require("../model/Student")

app.get("/students",async(req,resp)=>{

    try {
        const data = await Student.find();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

app.listen(PORT,()=>{
    console.log("server running  on port : "+PORT);
})


