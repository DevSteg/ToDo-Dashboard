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

// Function to display the weather object on to index.html
function displayWeather() {
    let iconUrl = `https://openweathermap.org/img/w/${weather.icon}.png`;

    cityName.innerHTML = weather.city;
    temp.innerHTML = `${weather.temperature}°C`
    weatherIcon.innerHTML = `<img src=${iconUrl} alt='Icon displaying current weather'>`
}

const weatherBtn = document.querySelector('.weather-btn');
const weatherInput = document.querySelector('.weather-input');
const weatherSec = document.querySelector('.weather');
const weatherLC = document.querySelector('.add-weather')

weatherBtn.addEventListener('click', function() {
    if (weatherInput.classList.contains('display')) {
        weatherInput.classList.remove('display');
        weatherBtn.innerText = 'Cancel';
    } else {
        weatherInput.classList.add('display');
        weatherBtn.innerText = 'Add Location';
    }
})

const newWeather = {};

weatherInput.addEventListener('keyup', function() {
    let newLocation = weatherInput.value;

    if (event.keyCode === 13) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=0fc41264887289d9795ff5c0a989c31b`)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data) {
            newWeather.temperature = Math.floor(data.main.temp - 273.15);
            newWeather.city = data.name;
            newWeather.icon = data.weather[0].icon;
        })
        .then(function() {
            addLocation();
            weatherInput.value = '';
            weatherInput.classList.add('display');
            weatherBtn.innerText = 'Add Location';
        })
    }

})

function addLocation() {
    let weatherAdd = document.createElement('div');
    weatherAdd.classList.add('weather-block');
    weatherAdd.innerHTML = `<div class="loc-temp">
                                <h2 class="location">${newWeather.city}</h2>
                                <h3 class="temp">${newWeather.temperature}°C</h3>
                            </div>
                            <p class="weather-icon"><img src=https://openweathermap.org/img/w/${weather.icon}.png alt='Icon displaying current weather'></p>`

    weatherSec.insertBefore(weatherAdd, weatherLC);
}




