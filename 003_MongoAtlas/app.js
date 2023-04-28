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

const addManyStudent = ()=>{

    const std1 = new Student({name:"pravin",email:"pravin@gmail.com",pass:"pravin123"})
    const std2 = new Student({name:"jay",email:"jay@gmail.com",pass:"jay123"})
    const std3 = new Student({name:"Kaushal",email:"kaushall@gmail.com",pass:"kaushal123"})

    Student.insertMany([std1,std2,std3]).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })


}

const viewStudents = async ()=>{

        // Student.find().then(result=>{
        //     console.log(result);
        // }).catch(err=>{
        //     console.log(err);
        // })

       try {
        const result = await Student.find();
        console.log(result);
       } catch (error) {
        console.log(error);
       }

}


//addstudent()
//addManyStudent()
viewStudents()