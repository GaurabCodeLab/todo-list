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
        newList.innerHTML =
            `<span>${todoInput.value}</span>
<button class="remove" >Remove</button>
<button class="done" >Done</button>`;
        todoSection.append(newList);
        todoInput.value = "";
        removeAllBtn.style.display = "inline-block";
        pending.style.display = "block";
        completed.style.display = "none";
        const listItem = document.querySelectorAll(".todo-details");
        pending.textContent = `You have ${listItem.length} pending tasks`;
        
    }
})

todoInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        if (String(todoInput.value).trim() != "") {
            const newList = document.createElement("div");
            newList.classList.add("todo-details");
            newList.innerHTML =
                `<span>${todoInput.value}</span>
<button class="remove" >Remove</button>
<button class="done" >Done</button>`;
            todoSection.append(newList);
            todoInput.value = "";
            removeAllBtn.style.display = "inline-block";
           pending.style.display = "block";
           completed.style.display = "none";
           const listItem = document.querySelectorAll(".todo-details");
           pending.textContent = `You have ${listItem.length} pending tasks`;
           
        }
    }

})
// To Done/Remove Any List
todoSection.addEventListener("click", (event) => {
    const remove = document.querySelectorAll(".remove");
    if (event.target.classList.contains("done")) {
        event.target.previousElementSibling.previousElementSibling.style.textDecoration = "line-through";
        const listItem = document.querySelectorAll(".todo-details");
        event.target.remove();
        pending.textContent = (document.querySelectorAll(".done").length)?
        `You have ${document.querySelectorAll(".done").length} pending tasks`
        : "You have no pending tasks";
        
    }
    if (event.target.classList.contains("remove")) {
        if(remove.length === 1){
            completed.style.display = "block";
            pending.style.display = "none";
            removeAllBtn.style.display = "none";
        }
        event.target.parentNode.remove();
        const listItem = document.querySelectorAll(".todo-details");
        pending.textContent = (document.querySelectorAll(".done").length)?
        `You have ${document.querySelectorAll(".done").length} pending tasks`
        : "You have no pending tasks";
    }

})

removeAllBtn.addEventListener("click", ()=>{
    const allList = document.querySelectorAll(".todo-details");
   allList.forEach((value)=>{
      value.remove();
   })
   removeAllBtn.style.display = "none";
   completed.style.display = "block";
   pending.style.display = "none";
})





