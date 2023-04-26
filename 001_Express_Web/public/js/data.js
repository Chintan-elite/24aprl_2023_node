

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

function getCountries()
{
   fetch("https://restcountries.com/v3.1/all").then(data=>{
    return data.json()
   }).then(result=>{
    
        var rows = ""; //string
        for(var i=0;i<result.length;i++)
        {
           
            rows = rows+"<option value=>"+result[i].name.common+"</option>"


        }
        country.innerHTML=rows

   }).catch(err=>{
    console.log(err);
   })
}