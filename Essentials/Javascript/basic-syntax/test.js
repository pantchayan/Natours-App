// alert("Welcome to my page");

// // Variable declaration
// let a = 10, b = 5;

// console.log(a+10+b);


// // Function declaration ==> arrow method
// const sum = (a,b) => a+10+b;

// let s = sum(10,4);

// console.log(s);



// Regular function to arrow conversion practice ==========

// const greet = function(){
//     return 'hello, world';
// }

const greet = () => 'hello, world';

let string = greet();

//console.log(string);


const bill = (products, tax) =>{
    let total = 0;
    for(let i=0;i<products.length;i++){
        total+= products[i] + products[i] *tax;
    }
    return total;
};

//console.log(bill([10,15,30], 0.2));

// For each method ===========================
let people = ['chayan','vansu','mario','tvf'];

people.forEach((person)=>{
   // console.log(person);
});


// Callback function concept =====================

const main = (callback)=>{
    let value = 5;
    callback(value);
};


// main((value)=>{
//     console.log(value+5);
// });


// Objects ===============================


let user = {
    name: 'Vansu',
    age: 18,
    marks:[20,23,21,22,20],
    hobbies:[
        {number:1,title:'chayan'},
        {number:2,title:'chayan'}
    ],
    allMarks(){
        this.marks.forEach(mark=>{
            console.log(mark);   
        })
    },
    allHobbies(){
        this.hobbies.forEach(hobby=>{
            console.log(hobby.number+" "+hobby.title);
        })
    }
};


//user.allHobbies();


// Math object(similar to java)============================

// console.log(Math);

// console.log(Math.PI);

