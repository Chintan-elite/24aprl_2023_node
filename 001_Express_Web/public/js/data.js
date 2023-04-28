

var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "UXF2OHQ2WjBMT1Y5Q05MQzVhNE1sT3VJSk02Y3BaNzlRNHRVMHRjZA==");
    
    var requestOptions = {
       method: 'GET',
       headers: headers,
       redirect: 'follow'
    };

function getCountries()
{

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.json())
    .then(result => {

            console.log(result[0]);
            var rows = "";
            for(var i=0;i<result.length;i++)
            {
                rows = rows+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
            }
           country.innerHTML=rows

    })
    .catch(error => console.log('error', error));
}



var countryname;
function getStates(cname)
{
    countryname=cname
    fetch(`https://api.countrystatecity.in/v1/countries/${cname}/states`, requestOptions)
    .then(response => response.json())
    .then(result => {

            //console.log(result[0].name);
            var rows = "";
            for(var i=0;i<result.length;i++)
            {
                rows = rows+"<option value="+result[i].iso2+">"+result[i].name+"</option>"
            }
           state.innerHTML=rows

    })
    .catch(error => console.log('error', error));
}



var statename;
function getCities(sname)
{
   statename=sname
    fetch(`https://api.countrystatecity.in/v1/countries/${countryname}/states/${sname}/cities`, requestOptions)
    .then(response => response.json())
    .then(result => {

            //console.log(result[0].name);
            var rows = "";
            for(var i=0;i<result.length;i++)
            {
                rows = rows+"<option value="+result[i].name+">"+result[i].name+"</option>"
            }
           city1.innerHTML=rows

    })
    .catch(error => console.log('error', error));
}






function getcurrentWeather(cname)
{
    var cityname = cname+",,"+statename+","+countryname
    
   
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