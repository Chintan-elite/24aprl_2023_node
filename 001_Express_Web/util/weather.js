const axios = require("axios")

const weatherdata = (lat,lng,callback)=>{

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c6011b7fb7155f7b12560fc19d803e96&units=metric`

axios.get(url).then(result=>{
    const dt = result.data.main;

    const city = result.data.name
    const temp = dt.temp
    const pressure  =dt.pressure
    const humidity = dt.humidity

    // console.log(`
    
    // city : ${city}
    // Temp : ${temp},
    // Pressure : ${pressure}
    // Humidity : ${humidity}
    
    
    // `)

    callback({city,temp,pressure,humidity})

}).catch(err=>{
    callback(undefined,err)
})
}

module.exports={weatherdata}