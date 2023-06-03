const Razorpay = require('razorpay');
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())

var instance = new Razorpay({ key_id: 'rzp_test_9FeUGJy3Jq9kRB', key_secret: 'AkcTe1lZFkpyId365nAUgBUm' })



app.get("/makepayment", async(req,resp)=>{

    const amt = req.query.amt
try {
    
    var order = await instance.orders.create({
        amount: amt*100,
        currency: "INR",
        receipt: "order_rcptid_11"
    })
    console.log(order);
    resp.send(order)
} catch (error) {

console.log(error);
}


})





app.listen(3000,()=>{
    console.log("server running on port : "+3000);
})