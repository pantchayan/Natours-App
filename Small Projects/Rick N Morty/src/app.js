//  Javascript  == Python + Java

// CONST ==> constant , LET ==> update

const input = document.querySelector(".char-input form");


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
        console.log(charData);
        
    })
    .catch(err=>{
        console.log(err);
    });
    
};