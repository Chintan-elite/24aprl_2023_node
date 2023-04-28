const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    pass : {
        type : String
    }
})

module.exports =  new mongoose.model("Student",studentSchema)
