// Promises are used to erradicate the system of chaining callbacks for having a inherit methodology in the code.

const request = new XMLHttpRequest();
const getToDo = (resource) => {
    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("Some error occurred in fetching the data.");
            }
        });

        request.open('GET', resource);
        request.send();
    })
}

// Chaining promises 


getToDo("ToDos/Chayan.json").then(data => {

    console.group("Promise 1 resolved : ", data);
    return getToDo("ToDos/Tanshi.json");

}).then(data => {

    console.group("Promise 2 resolved : ", data);
    return getToDo("ToDos/Vansika.json");

}).then(data => {

    console.group("Promise 3 resolved : ", data);

}).catch(err => {

    console.log(err);

});