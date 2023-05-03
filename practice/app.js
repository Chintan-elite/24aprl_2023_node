const bcrypt = require("bcryptjs")


const mypass =async (pass)=>{

    const bpass =  await bcrypt.hash(pass,10)
    console.log(bpass);

    const isvalid = await bcrypt.compare("jay123",bpass)
    console.log(isvalid);

}


mypass("jay123")