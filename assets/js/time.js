// Time Section

const timeHour = document.querySelector('.hour');
const timeMinute = document.querySelector('.minutes');
const timeSeconds = document.querySelector('.seconds');
const todayDay = document.querySelector('.day');
const todayMonth = document.querySelector('.month');
const todayYear = document.querySelector('.year');

// Function to get the time and add it to index.html
function clock() {
    let today = new Date()
    
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    
    // Adds the time to the desired class
    timeHour.innerHTML = hour;
    timeMinute.innerHTML = minutes;
    timeSeconds.innerHTML = seconds;

    // If the time is below 10, adds a zero infront of the number
    if (hour < 10) {
        timeHour.innerHTML = `0${hour}`;
    } else if (minutes < 10) {
        timeMinute.innerHTML = `0${minutes}`;
    } else if (seconds < 10) {
        timeSeconds.innerHTML = `0${seconds}`;
    }
    
    // refreshs the clock function to add the time in realtime
    setInterval(clock, 500);
}

// Fucntion to add todays date to index.html
function todaysDate() {    
    let today = new Date()

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    
    // Adds the date to the desired class
    todayDay.innerHTML = day;
    todayMonth.innerHTML = month;
    todayYear.innerHTML = year;
    
}

window.onload = clock(), todaysDate();