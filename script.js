const form = document.getElementById("formSubmit");
const addBtn = document.getElementById("add");
const input = document.getElementById("input");
const todolist = document.getElementById("todo-list");

form.append(todolist);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todotext = input.value.trim();
  if (todotext !== "") {
    AddToDo(todotext);
    input.value = "";
  }
});
function AddToDo(todotext) {
  const todoitem = document.createElement("li");
  
  todoitem.textContent = todotext;

  const delBtn = document.createElement("p");
  delBtn.innerHTML=`
  <i class="fa-solid fa-trash"></i>
  `
  delBtn.addEventListener("click", () => {
    todoitem.remove();
  });
  todoitem.value = "";
  todoitem.appendChild(delBtn);
  todolist.append(todoitem);
}
