const express = require("express")
const app = express();
require("dotenv").config()
const path = require("path")
const hbs = require("hbs")
const weather = require("../util/weather")
const geocode = require("../util/geocode")
const PORT = process.env.PORT || 9000

const publicPath = path.join(__dirname,"../public")
const viewPath = path.join(__dirname,"../templetes/views")
const partialPath = path.join(__dirname,"../templetes/partials")
app.set("view engine","hbs")
app.set("views",viewPath)
app.use(express.static(publicPath))
hbs.registerPartials(partialPath)


app.get("/",(req,resp)=>{
    resp.render("index")
})


app.get("/home",(req,resp)=>{
    resp.render("home")
})

app.get("/about",(req,resp)=>{
    resp.render("about")
})

app.get("/myweather",(req,resp)=>{
    resp.render("myweather")
})

app.get("/myweather2",(req,resp)=>{
    resp.render("myweather2")
})

app.get("/weather",(req,resp)=>{

    const location = req.query.location
    geocode.geocodedata(location,(data,err)=>{
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
            
    
    // console.log(`
    
    //         City : ${result.city},
    //         Lat : ${data.lat},
    //         Lng : ${data.lng},
    //         Temp : ${result.temp},
    //         Pressure : ${result.pressure}
    //         Humidity : ${result.humidity}
    // `);

    resp.send({
            City : result.city,
            Lat : data.lat,
            Lng :data.lng,
            Temp : result.temp,
            Pressure : result.pressure,
            Humidity :result.humidity
    })
    
        })
    })
    


})

app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`);
})