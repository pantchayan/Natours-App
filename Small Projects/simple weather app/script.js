// http://dataservice.accuweather.com/locations/v1/search?q=kolkata&apikey=BvN8yz7JTkcgWAKo8ebI4eqrEugnRMKv


const input = document.querySelector(".location-input");

const inputText = document.querySelector("form>input");


// getting the input location string ==================================

input.addEventListener("submit",e=>{
    e.preventDefault();
    let location = e.target[0].value.toLowerCase();
    getLocationKey(location);
})


// getLocationKey method to hit api and recieve JSON data which includes KEY FOR THE PROVDED LOCATION ======================


const getLocationKey = (location)=>{
    let URL = "http://dataservice.accuweather.com/locations/v1/search?q="+location+"&apikey=BvN8yz7JTkcgWAKo8ebI4eqrEugnRMKv";
    // fetch behaves as a promise
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        // process the data and get location key.

        if(data.length >0){
        console.log(data[0].Key);
        let locationKey = data[0].Key;
        getData(locationKey);
        }
        else{
            alert("Please enter a valid place.");
            inputText.value="";
        }
    }).catch(err=>{
        console.log(err);
    });
}


// Using location key to hit Current Conditions API .

//http://dataservice.accuweather.com/currentconditions/v1/206690?apikey=BvN8yz7JTkcgWAKo8ebI4eqrEugnRMKv&language=en-us&details=false


const getData = (Key) =>{
    let URL = "http://dataservice.accuweather.com/currentconditions/v1/"+Key+"?apikey=BvN8yz7JTkcgWAKo8ebI4eqrEugnRMKv&language=en-us&details=false";

    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        // Process data 
        console.log(data[0].Temperature.Metric.Value,data[0].Temperature.Metric.Unit);
    })
    .catch(err=>{
        console.log(err);
    })
}   