//  Javascript  == Python + Java

// CONST ==> constant , LET ==> update

const input = document.querySelector(".char-input form");
const resultText = document.querySelector("#result > div > p");
const resultImage = document.querySelector("#result > div > img");



input.addEventListener("click" , e=>{
    e.preventDefault();
    let characterId = Math.floor((Math.random() * 100)+1);

    console.log(characterId)

    getData(characterId);
    // let character = e.target[0].value;
    // getData(character);
});


const getData = (characterId) =>{
    // code
    let apiEndPoint = "https://rickandmortyapi.com/api/character/"+characterId;

    fetch(apiEndPoint)
    .then(response=>response.json())
    .then(data=>{
        let charData = data;
        showData(charData);
    })
    .catch(err=>{
        console.log(err);
    });
    
};

const showData = (charData) =>{
    console.log(charData);

    // console.log(resultImage);

    console.log(resultText.innerHTML);
    resultText.innerHTML = `<b>Name:</b> ${charData.name}<br>
    <b>Status:</b> ${charData.status}<br>
    <b>Species:</b> ${charData.species}<br>
    <b>Gender:</b> ${charData.gender}<br>
    <b>Location:</b> ${charData.location.name}<br>
    <b>Origin:</b> ${charData.origin.name}`;
    resultImage.src = charData.image;
    window.scrollTo(0,document.body.scrollHeight);
};