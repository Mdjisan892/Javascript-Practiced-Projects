document.getElementById("search-btn").addEventListener("click", () => {
   const city = document.getElementById("city-input").value;
   if (city) {
       weather(city);
       document.getElementById("city-input").value = "";
   }
});

const weather = (city) => {
   const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=df97149316acbf517c71bb15aacb29d6&units=metric`;

   fetch(API)
       .then(res => res.json())
       .then(data => displayWeather(data));
}

const displayWeather = (data) => {
   const existingCard = document.querySelector(`[data-city="${data.name}"]`);
   if (existingCard) {
       existingCard.remove();
   }

   const weatherCard = document.createElement("div");
   weatherCard.classList.add("weather-card");
   weatherCard.setAttribute("data-city", data.name);

   const cityTitle = document.createElement("h2");
   cityTitle.innerHTML = data.name + `<small><sup>${data.sys.country}</sup></small>`;

   const temperature = document.createElement("p");
   temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;

   const weatherDescription = document.createElement("p");
   weatherDescription.textContent = `Weather: ${data.weather[0].description}`;

   const humidity = document.createElement("p");
   humidity.textContent = `Humidity: ${data.main.humidity}`;

   const windSpeed = document.createElement("p");
   windSpeed.textContent = `Wind speed: ${data.wind.speed} m/s`;

   const button = document.createElement("button");
   button.innerText = "Save Data";
   button.addEventListener("click", () => saveToStorage(data));

   const img = document.createElement("img");
   img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

   weatherCard.appendChild(cityTitle);
   weatherCard.appendChild(temperature);
   weatherCard.appendChild(img);
   weatherCard.appendChild(weatherDescription);
   weatherCard.appendChild(humidity);
   weatherCard.appendChild(windSpeed);
   weatherCard.appendChild(button);

   document.getElementById("weather_results").appendChild(weatherCard);
}

function saveToStorage(data){
  const weatherData = JSON.parse(localStorage.getItem("weatherData")) || []

  const existingWeatherData = weatherData.findIndex(item => item.name === data.name)
  if(existingWeatherData > -1){
    weatherData[existingWeatherData] = data;
  }else{
    weatherData.push(data)
  }

  localStorage.setItem("weatherData" , JSON.stringify(weatherData))
  populateState()
}

function populateState(){
 const storageDiv = document.getElementById("select");
 storageDiv.innerHTML = "";

 const weatherData = JSON.parse(localStorage.getItem("weatherData"));
 weatherData.forEach(data => {
    const option = document.createElement("option");
    option.setAttribute("data-city" , data.name);
    option.innerHTML = `${data.name} <small><sup>${data.sys.country}</sup></small> - Temperature: ${Math.round(data.main.temp)}°C`;
    storageDiv.appendChild(option);
 });
}
window.onload = populateState