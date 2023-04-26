

function getCity()
{
    var cityname = document.getElementById("cityname").value
   

    fetch(`/weather?location=${cityname}`).then(data=>{
        return data.json()
    }).then(result=>{
        
        city.innerHTML=result.City
        temp.innerHTML=result.Temp
        pressure.innerHTML=result.Pressure
        humidity.innerHTML=result.Humidity
        lat.innerHTML=result.Lat 
        lng.innerHTML=result.Lng 

    }).catch(err=>{
        console.log(err);
    })


}