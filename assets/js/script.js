// Todo List 
const todoBtn = document.querySelector('.todo-btn');
const addTodo = document.getElementById('todo-input');
const todoList = document.querySelector('.todo-list');

// Creates new button element for the check button
let checkBtn = document.createElement('button');
checkBtn.classList.add('check-btn', 'icon-btn');
checkBtn.innerHTML = '<i class="far fa-circle"></i>';

// Creates new button element for the delete button
let deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn', 'icon-btn');
deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

// Fuction to add a new todo once the .todo-btn has been clicked
todoBtn.onclick = function (newTodo) {
    newTodo = addTodo.value;

    // Creates new LI element
    let todoItem = document.createElement('li');
    todoItem.classList.add('list-item');
    todoItem.innerHTML = newTodo;
    
    if (newTodo === '') {
        // Checks if #todo-input has no input, then alerts the user if it is empty
        alert('Please Enter A Todo!');
    } else {
        // If #todo-input has a value, enters it into the .todo-list
        todoItem.prepend(checkBtn); // Requires fixing, Doesn't prepend and append correctly
        todoItem.append(deleteBtn); // Requires fixing, Doesn't prepend and append correctly
        todoList.appendChild(todoItem);
    }
    // Resets the #todo-input.
    addTodo.value = '';
}

// Function to make the check button work
checkBtn.addEventListener('click', function() {
    // If .check-green is active removes class and linethrough text, replaces the green checkmark with a circle icon
    if (checkBtn.classList.contains('check-green')) {
        this.innerHTML = '<i class="far fa-circle"></i>';
        this.classList.remove('check-green');
        this.parentElement.classList.remove('complete');
    // If .check-green is not active, adds the class and linethrough text, replaces the circle with a green checkmark icon
    } else {
        this.innerHTML = '<i class="fas fa-check-circle"></i>';
        this.classList.add('check-green');
        this.parentElement.classList.add('complete');      
    }
})

// Fucntion to make the delete button work
deleteBtn.addEventListener('click', function() {
    // removes the parent li element
    this.parentElement.remove();
})
