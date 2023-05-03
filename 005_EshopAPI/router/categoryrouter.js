const router = require("express").Router()
const Category = require("../model/categories")

router.post("/categories",async(req,resp)=>{
    try {
        const cat = new Category(req.body)
        const insertedcat = await cat.save()
        resp.send(insertedcat)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/categories",async(req,resp)=>{
    try {
      
        const data = await Category.find()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


module.exports=router