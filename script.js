const todoSection = document.querySelector(".todo-section");
const todoInput = document.querySelector(".add-todo");
const todoBtn = document.querySelector(".add-todo-btn");
const donebtn = document.querySelector(".done");
const removebtn = document.querySelector(".remove");
const removeAllBtn = document.querySelector(".remove-all");
const pending = document.querySelector(".pending");
const completed = document.querySelector(".completed");

// To Add New List
todoBtn.addEventListener("click", () => {
  if (String(todoInput.value).trim() != "") {
    const newList = document.createElement("div");
    newList.classList.add("todo-details");
    newList.innerHTML = `<h3>${todoInput.value}</h3>
            <div>
<button class="remove" >Remove</button>
<button class="done" >Done</button>
</div>`;
    todoSection.append(newList);
    todoInput.value = "";
    removeAllBtn.style.display = "inline-block";
    pending.style.display = "block";
    completed.style.display = "none";
    const listItem = document.querySelectorAll(".todo-details");
    pending.textContent = `You have ${listItem.length} pending tasks`;
  }
});

todoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (String(todoInput.value).trim() != "") {
      const newList = document.createElement("div");
      newList.classList.add("todo-details");
      newList.innerHTML = `<h3>${todoInput.value}</h3>
            <div>
<button class="remove" >Remove</button>
<button class="done" >Done</button>
</div>`;
      todoSection.append(newList);
      todoInput.value = "";
      removeAllBtn.style.display = "inline-block";
      pending.style.display = "block";
      completed.style.display = "none";
      const listItem = document.querySelectorAll(".todo-details");
      pending.textContent = `You have ${listItem.length} pending tasks`;
    }
  }
});
// To Done/Remove Any List
todoSection.addEventListener("click", (event) => {
  const remove = document.querySelectorAll(".remove");
  if (event.target.classList.contains("done")) {
    event.target.parentNode.previousElementSibling.style.textDecoration =
      "line-through";
      event.target.parentNode.previousElementSibling.style.textDecorationColor = "red";
      event.target.parentNode.previousElementSibling.style.textDecorationThickness = "5px";
      const undo = document.createElement("button");
      undo.classList.add("undo");
      undo.textContent = "Undo";
      event.target.parentNode.append(undo);
      event.target.remove();
    const taskLength = document.querySelectorAll(".done");
  if(taskLength){
    pending.textContent = `You have ${taskLength.length} pending tasks`;
  } else{
    pending.textContent = "You have no pending tasks";
  }
  }
  if (event.target.classList.contains("remove")) {
    if (remove.length === 1) {
      completed.style.display = "block";
      pending.style.display = "none";
      removeAllBtn.style.display = "none";
    }
    event.target.parentNode.parentNode.remove();
    const taskLength = document.querySelectorAll(".done");
  if(taskLength){
    pending.textContent = `You have ${taskLength.length} pending tasks`;
  } else{
    pending.textContent = "You have no pending tasks";
  }
  }
  if(event.target.classList.contains("undo")){
    event.target.parentNode.previousElementSibling.style.textDecoration =
      "none";
      const done = document.createElement("button");
      done.classList.add("done");
      done.textContent = "Done";
      event.target.parentNode.append(done);
      event.target.remove();
      const taskLength = document.querySelectorAll(".done");
  if(taskLength){
    pending.textContent = `You have ${taskLength.length} pending tasks`;
  } else{
    pending.textContent = "You have no pending tasks";
  }
  }
});

removeAllBtn.addEventListener("click", () => {
  const allList = document.querySelectorAll(".todo-details");
  allList.forEach((value) => {
    value.remove();
  });
  removeAllBtn.style.display = "none";
  completed.style.display = "block";
  pending.style.display = "none";
});
