const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

        uname : {
            type : String
        },
        email : {
            type : String
        },
        pass : {
            type : String
        },
        joindate : {
            type : Date,
            default:Date.now()
        },
        img : {
            type : String
        }



})

module.exports=new mongoose.model("User",userSchema)