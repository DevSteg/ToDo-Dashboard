// Weather Section
const cityName = document.querySelector('.location');
const temp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');

// let apiKey = 0fc41264887289d9795ff5c0a989c31b;

// Empty weather object to be filled using API
let weather = {};

// Check if Geolocation is enabled and function call
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(giveLocation, alertError);
} else {
    alert('Browser does not support geolocation, Please add City using the weather add button');
}

// Get Users location and run them in the API function
function giveLocation(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;

    weatherApi(longitude, latitude)
}

// Alert error message if geolocation does not work
function alertError(error) {
    alert(`${error.message}, Please enter city using the weather add button`);
}

// Function to get API data and add it the weather object
function weatherApi(longitude, latitude) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0fc41264887289d9795ff5c0a989c31b`)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data) {
            weather.temperature = Math.floor(data.main.temp - 273.15);
            weather.city = data.name;
            weather.icon = data.weather[0].icon;
        })
        .then(function() {
            displayWeather();
        })

}

