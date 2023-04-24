const axios = require("axios")

const geocodedata = (city,callback)=>{



const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`
axios.get(url).then(result=>{
    callback(result.data.results[0].geometry);


}).catch(err=>{
   callback(undefined,err)
})

}
module.exports={geocodedata}