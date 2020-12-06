// Todo List 
const todoBtn = document.querySelector('.todo-btn');
const addTodo = document.getElementById('todo-input');
const todoList = document.querySelector('.todo-list');

todoBtn.addEventListener('click', function(){
    if(addTodo.value === '') {
        alert('Please Enter a Todo!');
    } else {
        addNewTodo();
    }
})
addTodo.addEventListener('keyup', function(){
    if(event.keyCode === 13) {
        if(addTodo.value === '') {
            alert('Please Enter a Todo!');
        } else {
            addNewTodo();
        }
    }
})


// Function to add a new todo once the .todo-btn has been clicked
function addNewTodo(newTodo) {
    newTodo = addTodo.value;
    
    // Creates new li element
    let todoItem = document.createElement('li');
    todoItem.classList.add('list-item');
    todoItem.innerHTML = newTodo;

    // Creates new div for the check button and delete button
    let checkDelDiv = document.createElement('div')
    todoItem.appendChild(checkDelDiv);
    
    // Creates new button element for the check button
    let checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn', 'icon-btn');
    checkBtn.innerHTML = '<i class="far fa-circle"></i>';
    checkDelDiv.appendChild(checkBtn);
    
    // Adds functionality to the checkBtn
    checkBtn.addEventListener('click', function() {
    // If .check-green is active removes class and linethrough text, replaces the green checkmark with a circle icon
    if (checkBtn.classList.contains('check-green')) {
        this.innerHTML = '<i class="far fa-circle"></i>';
        this.classList.remove('check-green');
        checkDelDiv.parentElement.classList.remove('complete');
    } else {
        // If .check-green is not active, adds the class and linethrough text, replaces the circle with a green checkmark icon
            this.innerHTML = '<i class="fas fa-check-circle"></i>';
            this.classList.add('check-green');
            checkDelDiv.parentElement.classList.add('complete');
        }
    })
    
    // Creates new button element for the delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn', 'icon-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    checkDelDiv.appendChild(deleteBtn);

    // Add Functionality to the deleteBtn
    deleteBtn.addEventListener('click', function() {
        // removes the parent li element
        checkDelDiv.parentElement.remove();
    })

    todoList.appendChild(todoItem);

    // Resets the #todo-input.
    addTodo.value = '';
}


// Pull todoArr from local stroage

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
    
    // refreshs the clock function to add the time in  realtime
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

// Call the two functions to add Time and date to index.html when the page loads
window.onload = clock(), todaysDate();
