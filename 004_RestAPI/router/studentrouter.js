const express = require("express")
const router = express.Router()


const Student = require("../model/Student")

router.get("/students",async(req,resp)=>{

    try {
        const data = await Student.find();
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }

})

router.post("/students",async(req,resp)=>{

    //console.log("post api calling");
    //console.log(req.body);

    try {

        const std = new Student(req.body)
       const insertedData =   await std.save();
       resp.send(insertedData)
    } catch (error) {
        resp.send(error)
    }
})


router.put("/students/:id",async(req,resp)=>{

        try {
           const updatedData =  await Student.findByIdAndUpdate(req.params.id,req.body)
           resp.send(updatedData)
        } catch (error) {
            resp.send(error)
        }
})

router.delete("/students/:id",async(req,resp)=>{

    try {
       const deletedData =  await Student.findByIdAndDelete(req.params.id)
       resp.send(deletedData)
    } catch (error) {
        resp.send(error)
    }
})


router.get("/students/:id",async(req,resp)=>{

    try {
       const student =  await Student.findById(req.params.id)
       resp.send(student)
    } catch (error) {
        resp.send(error)
    }
})





module.exports=router