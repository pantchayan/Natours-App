const past = document.querySelector(".date");
const now = new Date();
const h2 = document.querySelector(".display-diff");

// fetching date from the form

past.addEventListener("submit",e=>{
    e.preventDefault();
    let pastDateStr = e.path[0][0].value; 
    calculateDiff(pastDateStr);
});


// calculating difference from the input date

const calculateDiff = (pastDateStr) =>{
    let pastDate = new Date(pastDateStr);
    let timestampDiff = now.getTime() - pastDate.getTime();
    let daysDiff = Math.round(timestampDiff/1000/60/60/24);
    if(isNaN(daysDiff)){
        console.log( daysDiff);
        alert("Please enter the date in correct format.");
    }
    else{
        console.log(daysDiff);
        displayDate(daysDiff);
    }
};

// displaying difference in dates 

const displayDate = (daysDiff)=>{
    h2.textContent = "Its been "+ daysDiff+" days since the date.";
};