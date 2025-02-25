const searchBtn = document.getElementById("searchBtn");
const locationInput = document.getElementById("locationInput");
const weatherDetails = document.getElementById("weatherDetails");

searchBtn.addEventListener("click" , () =>{
 const cityName = locationInput.value.trim();
 if(cityName){
    
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=df97149316acbf517c71bb15aacb29d6&units=metric`)
 .then(res => {
    if(!res.ok){
      throw new Error("The error in response")
    }
    return res.json()
 })
 .then(allData => {
  weatherDetails.innerHTML = "";

  const existingData =  document.querySelector(`[allData-city="${allData.name}"]`);
  if(existingData){
    existingData.remove()
  }
  
  const dataDiv= document.createElement("div");
  dataDiv.classList.add("weather")
  dataDiv.setAttribute("allData-city", allData.name);
  

   const cityTitle = document.createElement("h2");
   cityTitle.innerHTML = allData.name + `<small><sup>${allData.sys.country}</sup></small>`;

   const temperature = document.createElement("p");
   temperature.textContent = `Temperature: ${Math.round(allData.main.temp)}°C`;

   const weatherDescription = document.createElement("p");
   weatherDescription.textContent = `Weather: ${allData.weather[0].description}`;

   const humidity = document.createElement("p");
   humidity.textContent = `Humidity: ${allData.main.humidity}`;

   const windSpeed = document.createElement("p");
   windSpeed.textContent = `Wind speed: ${allData.wind.speed} m/s`;

   const button = document.createElement("button");
   button.innerText = "Save Data";
   button.className = "favourate";
   button.addEventListener("click", () => saveToStorage(allData));

   const img = document.createElement("img");
   img.src = `https://openweathermap.org/img/wn/${allData.weather[0].icon}.png`;

   dataDiv.appendChild(cityTitle);
   dataDiv.appendChild(temperature);
   dataDiv.appendChild(img);
   dataDiv.appendChild(weatherDescription);
   dataDiv.appendChild(humidity);
   dataDiv.appendChild(windSpeed);
   dataDiv.appendChild(button);
 
  weatherDetails.appendChild(dataDiv);
  locationInput.value = "";
 })
}
})

function saveToStorage (data) {

 const weather = JSON.parse(localStorage.getItem("weather")) || [];
 const existingDataFromWeb = weather.findIndex(item => item.name === data.name);

 if(existingDataFromWeb > -1){
  weather[existingDataFromWeb] = data
 }else{
  weather.push(data)
 }
 
 localStorage.setItem("weather" , JSON.stringify(weather));
 populateSelect()
}

function populateSelect(){
  const storageDiv = document.getElementById("select");
  storageDiv.innerHTML = ""; // Clear existing options


  const weatherData = JSON.parse(localStorage.getItem("weather"));
  weatherData.forEach( data => {
     const option = document.createElement("option");
     option.setAttribute("alldata-city" , data.name);
     option.innerHTML = `${data.name} <small><sup>${data.sys.country}</sup></small> - Temperature: ${Math.round(data.main.temp)}°C`;
     storageDiv.appendChild(option)
  });
}
window.onload = populateSelect