const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '    ',
		'X-RapidAPI-Host': '   '
	}
};

const getWeather = (city) =>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")



/**
 MumBai
 */
 const getMumBai = (c) =>{
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response) => {
        
        console.log(response)
        mum_cloud.innerHTML = response.cloud_pct
        mum_temp.innerHTML = response.temp
        
        mum_feel.innerHTML = response.feels_like
        mum_humid.innerHTML = response.humidity
        
        mum_min.innerHTML = response.min_temp
        mum_max.innerHTML = response.max_temp
        mum_wind.innerHTML = response.wind_speed
        
        mum_windd.innerHTML = response.wind_degrees
        mum_sunrise.innerHTML = response.sunrise
        mum_sunset.innerHTML = response.sunset
        })
	.catch(err => console.error(err));
}

getMumBai("Mumbai")

 /**
 MumBai
 */



 /**
 Chennai
 */
 const getChennai = (ci) =>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            chen_cloud.innerHTML = response.cloud_pct
            chen_temp.innerHTML = response.temp
            
            chen_feel.innerHTML = response.feels_like
            chen_humid.innerHTML = response.humidity
            
            chen_min.innerHTML = response.min_temp
            chen_max.innerHTML = response.max_temp
            chen_wind.innerHTML = response.wind_speed
            
            chen_windd.innerHTML = response.wind_degrees
            chen_sunrise.innerHTML = response.sunrise
            chen_sunset.innerHTML = response.sunset
            })
        .catch(err => console.error(err));
    }
    
    getChennai("Chennai")
/**
 Chennai
 */



 /**
 Bengalore
 */
 const getAgartala = (cit) =>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Agartala', options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            agartala_cloud.innerHTML = response.cloud_pct
            agartala_temp.innerHTML = response.temp
            
            agartala_feel.innerHTML = response.feels_like
            agartala_humid.innerHTML = response.humidity
            
            agartala_min.innerHTML = response.min_temp
            agartala_max.innerHTML = response.max_temp
            agartala_wind.innerHTML = response.wind_speed
            
            agartala_windd.innerHTML = response.wind_degrees
            agartala_sunrise.innerHTML = response.sunrise
            agartala_sunset.innerHTML = response.sunset
            })
        .catch(err => console.error(err));
    }
    
    getAgartala("Agartala")
/**
 Bengalore
 */




  /**
 Bhubaneswar
 */
 const getBhubaneswar = (hi) =>{
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhubaneswar', options)
        .then(response => response.json())
        .then((response) => {
            
            console.log(response)
            bhubaneswar_cloud.innerHTML = response.cloud_pct
            bhubaneswar_temp.innerHTML = response.temp
            
            bhubaneswar_feel.innerHTML = response.feels_like
            bhubaneswar_humid.innerHTML = response.humidity
            
            bhubaneswar_min.innerHTML = response.min_temp
            bhubaneswar_max.innerHTML = response.max_temp
            bhubaneswar_wind.innerHTML = response.wind_speed
            
            bhubaneswar_windd.innerHTML = response.wind_degrees
            bhubaneswar_sunrise.innerHTML = response.sunrise
            bhubaneswar_sunset.innerHTML = response.sunset
            })
        .catch(err => console.error(err));
    }
    
    getBhubaneswar("Bhubaneswar")
/**
 Bengalore
 */
