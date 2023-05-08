// const bcrypt = require("bcryptjs")


// const mypass =async (pass)=>{

//     const bpass =  await bcrypt.hash(pass,10)
//     console.log(bpass);

//     const isvalid = await bcrypt.compare("jay123",bpass)
//     console.log(isvalid);

// }


// mypass("jay123")


// const jwt = require("jsonwebtoken")


// const mytoken = async ()=>{
//     try {
        
//      const token = await   jwt.sign("{_id:123}","thisismysecretkey")
     
//      const verify = await jwt.verify(token,"thisismysecretkeY")
//         console.log(verify);

//     } catch (error) {
        
//     }
// }

// mytoken()



const express = require("express")
const app = express()
const multer = require("multer")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
  
        cb(null, "img")
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now()+".jpg")
    }
  })

var upload = multer({ 
    storage: storage 
}).single("file");       


app.post("/imgupload",upload,(req,resp)=>{

    console.log("file uploaded...");

})

app.listen(9000,()=>{
    console.log("connected...");
})
