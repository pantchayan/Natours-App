// alert("Welcome to my page");

// // Variable declaration
// let a = 10, b = 5;

// console.log(a+10+b);


// // Function declaration ==> arrow method
// const sum = (a,b) => a+10+b;

// let s = sum(10,4);

// console.log(s);



// Regular function to arrow conversion practice

// const greet = function(){
//     return 'hello, world';
// }

const greet = () => 'hello, world';

let string = greet();

console.log(string);


const bill = (products, tax) =>{
    let total = 0;
    for(let i=0;i<products.length;i++){
        total+= products[i] + products[i] *tax;
    }
    return total;
};



console.log(bill([10,15,30], 0.2));