// http://dataservice.accuweather.com/locations/v1/search?q=kolkata&apikey=BvN8yz7JTkcgWAKo8ebI4eqrEugnRMKv


const input = document.querySelector(".location-input");



// getting the input location string ==================================

input.addEventListener("submit",e=>{
    e.preventDefault();
    let location = e.target[0].value.toLowerCase();
    getLocationKey(location);
})


// getData method to hit api and recieve JSON data ======================


const getLocationKey = (location)=>{
    let URL = "http://dataservice.accuweather.com/locations/v1/search?q="+location+"&apikey=BvN8yz7JTkcgWAKo8ebI4eqrEugnRMKv";
    // fetch behaves as a promise
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        // process the data.
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
}