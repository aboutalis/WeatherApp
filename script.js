const apiKey = "1fc82c5985db783a1df9281f25a13afb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + '&appid='+apiKey);

    //Checking invalid city data
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
    }else{
        var data = await response.json();

        //Update text data 
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

        //Update weather image
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src= "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src= "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src= "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src= "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src= "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src= "images/snow.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

    
}

searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


   


