const mongoose  =require("mongoose")
const express = require("express")
const app = express()

const PORT = 3000;
const url = "mongodb+srv://chintantops:chintantops@cluster0.ytbhtsd.mongodb.net/myapp?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("db connected !!!");
})

app.use(express.json())
app.use("/",require("../router/studentrouter"))

app.listen(PORT,()=>{
    console.log("server running  on port : "+PORT);
})


