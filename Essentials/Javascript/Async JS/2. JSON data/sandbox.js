// JSON data stands for JavaScript Object Notation.

// Its essentially JS objects in string format.

// Returned as a response from API/ Server.

const request = new XMLHttpRequest();
const getToDo = (callback)=>{
    request.addEventListener("readystatechange",()=>{
        if(request.readyState===4 && request.status ===200){
            let data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if(request.readyState===4){
            callback("Some error occurred in fetching the data.", undefined);
        }
    });
    
    request.open('GET','ToDo.json')
    request.send();
}


console.log(1);
console.log(2);

getToDo((err, data)=>{
    console.log("Async code");
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(3);
console.log(4);


