const router = require("express").Router()
const User = require("../model/users")
const bcrypt = require("bcryptjs")

router.post("/users",async(req,resp)=>{
    try {
        const user = new User(req.body)

        const insertedData = await user.save()
        resp.send(insertedData)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/users",async(req,resp)=>{
    try {
        const data = await User.find()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.post("/login",async (req,resp)=>{
    try {
        
        const udata = await User.findOne({email:req.body.email})
        
        const valid = await bcrypt.compare(req.body.pass,udata.pass)
        if(valid)
        {
            resp.send("welcome : "+udata.uname)
        }
        else
        {
            resp.send("Invalid credentials !!!!")
        }
    } catch (error) {
        resp.send("Invalid credentials !!!!")
    }

})


router.delete("/users/:id",async(req,resp)=>{

    try {
            const delteddata = await User.findByIdAndDelete(req.params.id)
            resp.send(delteddata)
        } catch (error) {
        resp.send(error)
    }
})


module.exports=router