// FETCH API WORKS ON THE METHODOLOGY OF PROMISES



// Chaining fetch APIs.

fetch("ToDos/Chayan.json").then(resolved => {
    if (resolved.ok) {
        return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
    }
    else {
        console.log("Some error.")
    }
}).then(data => {
    console.log(data);
    return fetch("ToDos/Tanshi.json");
}).then(resolved => {
    if (resolved.ok) {
        return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
    }
    else {
        console.log("Some error.")
    }
}).then(data => {
    console.log(data);
    return fetch("ToDos/Vansika.json");
}).then(resolved => {
    if (resolved.ok) {
        return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
    }
    else {
        console.log("Some error.")
    }
}).then(data => {
    console.log(data);
}).catch(err=>{
    console.log("Rejected",err);
});