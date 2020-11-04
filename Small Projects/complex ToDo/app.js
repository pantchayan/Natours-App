let addForm = document.querySelector("body > div > form")

addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTask(e.path[0][0].value);
    e.path[0][0].value ="";
});

const ul = document.querySelector("ul");

const addTask = (task)=>{
    ul.innerHTML+= `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
};


