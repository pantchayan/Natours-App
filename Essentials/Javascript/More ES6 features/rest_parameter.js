// REST PARAMETER

const double = (...nums)=>{
    return nums.map(num=>num*2);
};

const result = double(1,2,3,4,5,6,7,8);

console.log(result);

// SPREAD SYNTAX ====

const people = ['Chayan','Vansika'];

const members = ['Labbu','Vansu',...people];

console.log(members);


// SPREAD SYNTAX IN OBJECTS ====

const user = {name:'Chayan', age:20, company:'XYZ'};

const admin = {...user, task:'Maintain docs'};

console.log(user,admin);