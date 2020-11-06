


// fetch("ToDos/Chayan.json").then(resolved => {
//     if (resolved.ok) {
//         return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
//     }
//     else {
//         console.log("Some error.")
//     }
// }).then(data => {
//     console.log(data);
//     return fetch("ToDos/Tanshi.json");
// }).then(resolved => {
//     if (resolved.ok) {
//         return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
//     }
//     else {
//         console.log("Some error.")
//     }
// }).then(data => {
//     console.log(data);
//     return fetch("ToDos/Vansika.json");
// }).then(resolved => {
//     if (resolved.ok) {
//         return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
//     }
//     else {
//         console.log("Some error.")
//     }
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("Rejected", err);
// });


// Aysnc await is just a syntax advancement which helps us perform the same fucntionalities in much easier way.

const getToDos = async () => {
    try {

        await fetch("ToDos/Chayan.json").then((resolved) => {
            if (resolved.ok) {
                return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
            }
            else {
                console.log("Some error.")
            }
        }).then((data) => {
            console.log(data);
        });

        await fetch("ToDos/Tanshi.json").then((resolved) => {
            if (resolved.ok) {
                return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
            }
            else {
                console.log("Some error.")
            }
        }).then((data) => {
            console.log(data);
        });

        await fetch("ToDos/Vansika.json").then((resolved) => {
            if (resolved.ok) {
                return resolved.json(); // CHAINED PROMISE TO RESOLVE THE JSON FILE
            }
            else {
                console.log("Some error.")
            }
        }).then((data) => {
            console.log(data);
        });

    }
    catch (err) {
        console.log(err);
    }
}

getToDos();




