const router = require("express").Router()
const Product = require("../model/products")

router.post("/products",async(req,resp)=>{
    try {
        const prod = new Product(req.body)
        const insertedprod = await prod.save()
        resp.send(insertedprod)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/products",async(req,resp)=>{
    try {
      
        const data = await Product.find()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


module.exports=router