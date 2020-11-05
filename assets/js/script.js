// Todo List 
const todoBtn = document.querySelector(".todo-btn");
const addTodo = document.getElementById('todo-input');
const todoList = document.querySelector('.todo-list');

todoBtn.onclick = function(newTodo) {
    newTodo = addTodo.value;
    let todoItem = document.createElement('li');
    todoItem.classList.add('list-item');
    todoItem.innerHTML = `<i class="far fa-circle check-btn"></i>
                          <p>${newTodo}</p>
                          <i class="fas fa-trash delete-btn"></i>`;
    if (newTodo === '') {
        alert('Please Enter A Todo!');
    } else {
        todoList.appendChild(todoItem);
    }
};
