
let addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const findForm = document.querySelector(".search input");




// ADDING NEW TASKS ==========================================================
addForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    addTask(e.path[0][0].value);
    e.path[0][0].value ="";
});

const addTask = (task)=>{
    list.innerHTML+= `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${task}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`
};

// REMOVING TASKS ============================================================

const delBtn = document.querySelector("ul");

delBtn.addEventListener("click",e=>{
    if(e.target.tagName == "I"){
        e.path[1].remove();
    } 
});


// FINDING/ FILTERING TASKS ==============================================================

findForm.addEventListener("keyup",e=>{
    filterToDos(e.path[0].value);
})

const filterToDos = (term) => {
    // console.log(Array.from(list.children));
    console.log(term);
    Array.from(list.children)
        .filter((item)=>{
            return !item.textContent.includes(term);
        })
        .forEach((item)=>{
            item.classList.add('filtered');
        })

    Array.from(list.children)
        .filter((item)=>{
            return item.textContent.includes(term);
        })
        .forEach((item)=>{
            item.classList.remove('filtered');
        })
};





