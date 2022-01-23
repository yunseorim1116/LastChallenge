const todoInput = document.querySelector("#input");
const toDoForm = document.querySelector("#todo-list");
const toDoList = document.getElementById("todo-list2");

const todoList = [];

toDoForm.addEventListener("submit", todoSubmit);

function deletTodo(event){

  const li = event.target.parentElement;
  li.remove();
}

function todoSubmit(event) {
  //클릭 후 실행되는 이벤트드 ㄹ

  event.preventDefault(); //새로고침 막아줌

  const newTodo = todoInput.value;
  todoInput.value = ""; //엔터누르면 값없어지고

  todoList.push(newTodo);
  paintTodo(newTodo);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";

  button.addEventListener("click",deletTodo)
  
  li.appendChild(span);
  li.appendChild(button);

  
  toDoList.appendChild(li);
}
