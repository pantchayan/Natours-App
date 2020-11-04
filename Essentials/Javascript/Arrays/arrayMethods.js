console.log(" ----- ");

// FILTER METHOD ===========================================================================

let cats = ['persian','indian','wild','persian']


// console.log(cats);

cats = cats.filter((cat)=>{
    return cat=="wild";
});

// console.log(cats);


let scores = [20,30,40,50,60,70];

// console.log(scores);

const filteredScores = scores.filter((score)=>{
    return score>30;
})

// console.log(scores);
// console.log(filteredScores);


const users = [
    {name:'Chayan', premium:true},
    {name:'Vansika', premium:true},
    {name:'Labbu', premium:false},
    {name:'KSI', premium:false},
    {name:'Jake', premium:false},
    {name:'Gaurav', premium:true},
];


const premiumUsers = users.filter((user)=>{
    return user.premium==true;
});

// console.log(premiumUsers);


// MAP METHOD ==========================================


const prices = [10,20,40,60,100,120,140];


const updatedPrices = prices.map((price)=>{
    return price/2;
});

console.log(updatedPrices);


// REDUCE METHOD =======================================

// BS MEHTOD TBH.




// FIND METHOD ========================================


scores = [20,80,5,40,50,60,70];

const firstHighScore = scores.find((score)=>{
    return score>50;
})

// console.log(firstHighScore);



// SORT and REVERSE METHOD ========================================


// This method works fine with STRINGS when default

// With numerics its  a headache to execute for a beginner

scores.sort();

// console.log(scores);



// Chaining Array Methods ===========================================


