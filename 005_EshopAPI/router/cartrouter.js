const router = require("express").Router()
const Cart = require("../model/carts")
const mongoose = require("mongoose")
router.post("/cart",async(req,resp)=>{
    try {
        const cart = new Cart(req.body)
        const data = await cart.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/cart/:id",async(req,resp)=>{
    try {
        


        const _id =new mongoose.Types.ObjectId(req.params.id)
        
        //const data =await Cart.find({uid:req.params.id})
        const data = await Cart.aggregate([{$match:{uid:_id}},{$lookup:{from:'users',localField:'uid',foreignField:'_id',as:'user'}},{$lookup:{from:'products',localField:'pid',foreignField:'_id',as:'product'}}])
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

module.exports=router