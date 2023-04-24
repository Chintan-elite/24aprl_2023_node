const weather = require("./weather")
const geocode = require("./geocode")


geocode.geocodedata("anand,gujarat",(data,err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    weather.weatherdata(data.lat,data.lng,(result,err)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        

console.log(`

        City : ${result.city},
        Lat : ${data.lat},
        Lng : ${data.lng},
        Temp : ${result.temp},
        Pressure : ${result.pressure}
        Humidity : ${result.humidity}



`);

    })
})


