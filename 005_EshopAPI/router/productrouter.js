const router = require("express").Router()
const mongoose = require("mongoose")
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
      
        const data = await Product.aggregate([{$lookup : {from:'categories',localField:'catid',foreignField:'_id',as:'Category'}}])
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})


router.get("/products/category/:cid",async(req,resp)=>{
    try {
            
        const _id = new mongoose.Types.ObjectId(req.params.cid)
        const data = await Product.aggregate([{$match:{catid:_id}},{$lookup : {from:'categories',localField:'catid',foreignField:'_id',as:'Category'}}])

        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

module.exports=router