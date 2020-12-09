// Weather Section
const locName = document.querySelector('.location');
const temp = document.querySelector('.temp');
const weatherIcon = document.querySelector('.weather-icon');
const weatherBlock = document.querySelector('.weather-block');


// Empty weather object to be filled using API
let weather = {};

// -- Geolocation Code created with the help of tutorial from Code Explained on youtube, Can be found here - https://www.youtube.com/watch?v=KqZGuzrY9D4&t=1773s
// Check if Geolocation is enabled and function call
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(giveLocation, errorMsg);
} else {
    alert('Browser does not support geolocation, Please add location using the add location button');
}

// Get Users location and run them in the API function
function giveLocation(position) {
    let longitude = position.coords.longitude;
    let latitude = position.coords.latitude;
    
    weatherApi(longitude, latitude)
}

// Alert error message if geolocation does not work
function errorMsg(error) {
    alert(`${error.message}, Please enter location using the Add Location button`);
    weatherBlock.classList.add('display');
}

// Function to get API data and add it the weather object using geolocation
function weatherApi(longitude, latitude) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0fc41264887289d9795ff5c0a989c31b`)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then(function(data) {
        // adds the API data to the weather object
        weather.temperature = Math.floor(data.main.temp - 273.15);
        weather.loc = data.name;
        weather.icon = data.weather[0].icon;
        displayWeather();
    })  
}

// Function to display the weather object on to index.html
function displayWeather() {
    let iconUrl = `https://openweathermap.org/img/w/${weather.icon}.png`;
    
    locName.innerHTML = weather.loc;
    temp.innerHTML = `${weather.temperature}<span class="temp-c"> °C</span>`
    weatherIcon.innerHTML = `<img src=${iconUrl} alt='Icon displaying current weather'>`
}
// -- Geolocation Code created with the help of tutorial from Code Explained on youtube, Can be found here - https://www.youtube.com/watch?v=KqZGuzrY9D4&t=1773s

const weatherBtn = document.querySelector('.weather-btn');
const weatherInput = document.querySelector('.weather-input');
const weatherSec = document.querySelector('.weather');

// Function to show the weather-input on index.html allowing the user to add another location
weatherBtn.addEventListener('click', function() {
    if (weatherInput.classList.contains('display')) {
        weatherInput.classList.remove('display');
        weatherBtn.innerText = 'Cancel';
    } else {
        weatherInput.classList.add('display');
        weatherBtn.innerText = 'Add Location';
    }
})

// newWeather empty object ready for the data from the API 
const newWeather = {};

// Function to allow the user to fetch any chosen location from the API
weatherInput.addEventListener('keyup', function() {
    let newLocation = weatherInput.value;
    // Fetch the API data using the users input
    if (event.keyCode === 13) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=0fc41264887289d9795ff5c0a989c31b`)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data) {
            // checks if a valid location has been input
            if(weatherInput === '' || data.main === undefined) {
                alert('Please Enter a valid location!')
            } else {
                // Adds chosen API data to the newWeather Object
                newWeather.temperature = Math.floor(data.main.temp - 273.15);
                newWeather.city = data.name;
                newWeather.icon = data.weather[0].icon;
                // Runs function to add data to the index.html and reset the weatherBtn
                addLocation();
                weatherInput.value = '';
                weatherInput.classList.add('display');
                weatherBtn.innerText = 'Add Location';
            }
        })
    }
    
})

// function to add data from newWeather object to index.html
function addLocation() {
    let weatherAdd = document.createElement('div');
    weatherAdd.classList.add('weather-block');
    weatherAdd.innerHTML = `<div class="loc-temp">
                            <h2 class="location">${newWeather.city}</h2>
                            <h3 class="temp">${newWeather.temperature}<span class="temp-c"> °C</span></h3>
                            </div>
                            <p class="weather-icon"><img src=https://openweathermap.org/img/w/${newWeather.icon}.png alt='Icon displaying current weather'></p>`;
    
    // Creating the delete button for the weather section
    const deleteLoc = document.createElement('button');
    deleteLoc.classList.add('delete-loc');
    deleteLoc.innerHTML = '<i class="fas fa-trash"></i>';
    weatherAdd.appendChild(deleteLoc);
    
    // Adds the functionality to the delete button in the weather section
    deleteLoc.addEventListener('click', function(){
        this.parentElement.remove();
    })

    weatherSec.appendChild(weatherAdd);
}
