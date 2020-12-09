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
   
    // Creates new button element for the check button
    let checkBtn = document.createElement('button');
    checkBtn.classList.add('check-btn', 'icon-btn');
    checkBtn.innerHTML = '<i class="far fa-circle"></i>';
    todoItem.prepend(checkBtn);
    
    // Adds functionality to the checkBtn
    checkBtn.addEventListener('click', function() {
    // If .check-green is active removes class and linethrough text, replaces the green checkmark with a circle icon
    if (checkBtn.classList.contains('check-green')) {
        this.innerHTML = '<i class="far fa-circle"></i>';
        this.classList.remove('check-green');
        this.parentElement.classList.remove('complete');
    } else {
        // If .check-green is not active, adds the class and linethrough text, replaces the circle with a green checkmark icon
            this.innerHTML = '<i class="fas fa-check-circle"></i>';
            this.classList.add('check-green');
            this.parentElement.classList.add('complete');
        }
    })
    
    // Creates new button element for the delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn', 'icon-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoItem.appendChild(deleteBtn);

    // Add Functionality to the deleteBtn
    deleteBtn.addEventListener('click', function() {
        // removes the parent li element
        this.parentElement.remove();
    })

    todoList.appendChild(todoItem);

    setStorage(newTodo);

    // Resets the #todo-input.
    addTodo.value = '';
}

//  Add Todos to local Storage
function setStorage(newTodo) {
    let todoStor;

    if(localStorage.getItem('todoStor') === null) {
        todoStor = [];
    } else {
        todoStor = JSON.parse(localStorage.getItem('todoStor'));
    }

    todoStor.push(newTodo);
    localStorage.setItem('todoStor', JSON.stringify(todoStor));
}

// -- Code Created with the help of the DEV Ed tutorial, Can be found here - https://www.youtube.com/watch?v=Ttf3CEsEwMQ&t=1201s
// Get Todos from local storage
function getStorage(Todo) {
    let todoStor;

    if(localStorage.getItem('todoStor') === null) {
        todoStor = [];
    } else {
        todoStor = JSON.parse(localStorage.getItem('todoStor'));
    }
    todoStor.forEach(function(Todo){
        // Creates new li element
        let todoItem = document.createElement('li');
        todoItem.classList.add('list-item');
        todoItem.innerHTML = Todo;
    
        // Creates new button element for the check button
        let checkBtn = document.createElement('button');
        checkBtn.classList.add('check-btn', 'icon-btn');
        checkBtn.innerHTML = '<i class="far fa-circle"></i>';
        todoItem.prepend(checkBtn);
    
        // Adds functionality to the checkBtn
        checkBtn.addEventListener('click', function() {
        // If .check-green is active removes class and linethrough text, replaces the green checkmark with a circle icon
        if (checkBtn.classList.contains('check-green')) {
            this.innerHTML = '<i class="far fa-circle"></i>';
            this.classList.remove('check-green');
            this.parentElement.classList.remove('complete');
        } else {
            // If .check-green is not active, adds the class and linethrough text, replaces the circle with a green checkmark icon
                this.innerHTML = '<i class="fas fa-check-circle"></i>';
                this.classList.add('check-green');
                this.parentElement.classList.add('complete');
            }
        })
    
        // Creates new button element for the delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn', 'icon-btn');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        todoItem.appendChild(deleteBtn);

        // Add Functionality to the deleteBtn
        deleteBtn.addEventListener('click', function() {
            // Removes the todo from the todoStor array
            let todoIndex = todoItem.innerText;
            todoStor.splice(todoStor.indexOf(todoIndex), 1);
            // Removes the parent li element
            this.parentElement.remove();
            // Updates the local storage with the new array
            localStorage.setItem('todoStor', JSON.stringify(todoStor));
        })

        todoList.appendChild(todoItem);
    })
} 
// -- Code Created with the help of the DEV Ed tutorial, Can be found here - https://www.youtube.com/watch?v=Ttf3CEsEwMQ&t=1201s


// Change the background image daily
function setBackground() {

    let bgImage = ['assets/images/background/1.jpg', 'assets/images/background/2.jpg','assets/images/background/3.jpg','assets/images/background/4.jpg'];

    // Picks a random number between 1 and 4 and uses the number to pick the image to display.
    let i = Math.floor(Math.random() * 4);
    document.body.style.backgroundImage = `url(${bgImage[i]})`

}

// Call the two functions to add Time and date to index.html when the page loads
window.onload = getStorage(), setBackground();


