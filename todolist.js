const todoList = [
    "Belajar JavaScript Dasar",
    "Belajar JavaScript Object Oriented Programming",
    "Belajar JavaScript Document Object Model",
];

function clearTodolist() {
    const todolistBody = document.getElementById("todolistBody");
    while (todolistBody.firstChild) {
        todolistBody.removeChild(todolistBody.firstChild);
    };
}

function removeTodolist(index) {
    todoList.splice(index, 1);
    displayTodoList();
}

function addTodolist(index, todo) {
    const todolistBody = document.getElementById("todolistBody");
    const tr = document.createElement("tr");
    todolistBody.appendChild(tr);

    const tdButton = document.createElement("td");
    tr.appendChild(tdButton);

    const buttonDone = document.createElement("input");
    buttonDone.type = "button";
    buttonDone.value = "DONE";
    buttonDone.onclick = function () {
        removeTodolist(index);
    };
    tdButton.appendChild(buttonDone);

    const tdTodo = document.createElement("td");
    tdTodo.textContent = todo;
    tr.appendChild(tdTodo);
}

function displayTodoList() {
    clearTodolist();

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];

        const searchText = document.getElementById("search").value.toLowerCase();
        if (todo.toLowerCase().includes(searchText)) {
            addTodolist(i, todo);
        };
    };
}

document.forms["todoForm"].onsubmit = function (event) {
    const todo = document.forms["todoForm"]["todo"].value;
    todoList.push(todo);

    document.forms["todoForm"].reset();

    event.preventDefault();

    console.info(todo);
    console.info(todoList);
    displayTodoList();
};

const searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
    displayTodoList();
};
searchInput.onkeydown = function () {
    displayTodoList();
};

displayTodoList();
