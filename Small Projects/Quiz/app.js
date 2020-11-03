let form = document.querySelector("form");


let score = document.querySelector("#score > h3");

const displayPercentage = marks=>{
    let percentage = marks/4*100;
    score.textContent = "You are "+ percentage+ "% Ninja!";
}


form.addEventListener("submit",e=>{
    e.preventDefault();
    let marks = 0;
    if(e.target[1].checked==true) marks++;
    if(e.target[3].checked==true) marks++;
    if(e.target[5].checked==true) marks++;
    if(e.target[6].checked==true) marks++;

    console.log(marks);
    scrollTo(0,0);
    displayPercentage(marks);
});

// target[0].checked