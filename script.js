const apiKey = "1fc82c5985db783a1df9281f25a13afb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");
const iconImg = document.querySelector(".col img");

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
            card.style.color = "#fff";
            iconImg.style.filter = "brightness(1)";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src= "images/clear.png";
            card.style.background = "linear-gradient(135deg, #00feba, #5b548a)";
            card.style.color = "#fff";
            iconImg.style.filter = "brightness(1)";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src= "images/rain.png";
            card.style.background = "linear-gradient(135deg, rgba(174, 194, 219, 0.8) 0%, rgba(174, 194, 219, 0.4) 50%, rgba(174, 194, 219, 0) 100%)";
            card.style.color = "#fff";
            iconImg.style.filter = "brightness(1)";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src= "images/drizzle.png";
            card.style.background = "linear-gradient(135deg, #ADD8E6, #87CEEB)";
            card.style.color = "#000";
            iconImg.style.filter = "brightness(0)";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src= "images/mist.png";
            card.style.background = "linear-gradient(135deg, #F5F5F5, #D3D3D3)";
            card.style.color = "#000";
            iconImg.style.filter = "brightness(0)";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src= "images/snow.png";
            card.style.background = "linear-gradient(135deg, #FFFFFF, #B0E0E6)";
            card.style.color = "#000";
            iconImg.style.filter = "brightness(0)";
        }
        console.log(data.weather[0].main);

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

    
}

searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


   



