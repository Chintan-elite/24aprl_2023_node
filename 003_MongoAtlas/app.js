const mongoose  =require("mongoose")

const url = "mongodb+srv://chintantops:chintantops@cluster0.ytbhtsd.mongodb.net/myapp?retryWrites=true&w=majority"

mongoose.connect(url).then(()=>{
    console.log("db connected !!!");
})


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

const Student = new mongoose.model("Student",studentSchema)




const addstudent =()=>{

    const std = new Student({name:"pravin",email:"pravin@gmail.com",pass:"pravin123"})

    std.save().then(result=>{
        
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })


}

addstudent()

