const jwt = require("jsonwebtoken")
const User = require("../model/users")

const auth = async(req,resp,next)=>{

    try {
        
        const mytoken = req.header("auth-token")
        console.log(mytoken);
        const verifyToken = await jwt.verify(mytoken,"thisismysecrettokenkey")

        if(verifyToken)
        {
            const userdata = await User.findOne({_id:verifyToken._id})
            req.user = userdata
            next()
        }
        else{
            resp.send("Please login first !!!!")
        }

    } catch (error) {
        resp.send("Please login first !!!!")
    }


}

module.exports=auth