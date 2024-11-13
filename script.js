document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-text");
  const addTodoButton = document.getElementById("add-todo-btn");
  const todoList = document.getElementById("todo-list");

  addTodoButton.addEventListener("click", addTodo);

  function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");

    const todoSpan = document.createElement("span");
    todoSpan.classList.add("todo-text");
    todoSpan.textContent = todoText;
    todoSpan.addEventListener("click", toggleComplete);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);

    todoItem.appendChild(todoSpan);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    todoInput.value = "";
  }

  function toggleComplete(event) {
    event.target.classList.toggle("completed");
  }

  function deleteTodo() {
    const todoItem = this.parentElement;
    todoList.removeChild(todoItem);
  }
});