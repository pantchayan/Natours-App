const request = new XMLHttpRequest();
const getToDo = (callback)=>{
    request.addEventListener("readystatechange",()=>{
        if(request.readyState===4 && request.status ===200){
            callback(undefined, request.responseText);
        }
        else if(request.readyState===4){
            callback("Some error occurred in fetching the data.", undefined);
        }
    });
    
    request.open('GET','https://jsonplaceholder.typicode.com/todos/1')
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


