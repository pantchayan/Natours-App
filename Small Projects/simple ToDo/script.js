const ul = document.querySelector("ul");

ul.addEventListener("click",e=>{
    if(e.target.tagName == "LI"){
        e.target.remove();
    }
});


const addTask = (task)=>{
    ul.innerHTML+=`<li>${task}</li>`;
}


const form = document.querySelector("form");


form.addEventListener("submit",e=>{
    e.preventDefault();
    addTask(e.path[0][0].value);
    
})
