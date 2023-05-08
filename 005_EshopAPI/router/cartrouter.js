const router = require("express").Router()
const Cart = require("../model/carts")
const mongoose = require("mongoose")
const auth = require("../middleware/auth")

router.post("/cart",auth,async(req,resp)=>{
    try {

        const user = req.user
        console.log(user);
        const cart = new Cart({uid:user._id,pid:req.body.pid})
       const data = await cart.save()
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/cart",auth,async(req,resp)=>{
    try {
        
        const user = req.user

        const _id =new mongoose.Types.ObjectId(user._id)
        
        //const data =await Cart.find({uid:req.params.id})
        const data = await Cart.aggregate([{$match:{uid:_id}},{$lookup:{from:'users',localField:'uid',foreignField:'_id',as:'user'}},{$lookup:{from:'products',localField:'pid',foreignField:'_id',as:'product'}}])
        resp.send(data)
    } catch (error) {
        resp.send(error)
    }
})

module.exports=router