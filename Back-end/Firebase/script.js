const list = document.querySelector('ul');
const form = document.querySelector('form');

// function to display recipe onto the menu
const addRecipe = (recipe, id)=>{
    let html = `<li data-id="${id}">
                <div>${recipe.title}</div>
                <button class="btn btn-danger btn-sm my-2">delete</button>
                </li>`;
    list.innerHTML += html;
}




db.collection('recipes').onSnapshot(snapshot=>{
    console.log(snapshot.docChanges());
})


const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
      if(recipe.getAttribute('data-id') === id){
        recipe.remove();
      }
    });
  };
  
  // real-time listener
  db.collection('recipes').onSnapshot(snapshot => {
    console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
      const doc = change.doc;
      if(change.type === 'added'){
        // console.log(doc);
        addRecipe(doc.data(), doc.id)
      } else if (change.type === 'removed'){
        deleteRecipe(doc.id);
      }
    });
  });







// 5 STEPS TO GET DATA FROM FIREBASE :

// 1. getting reference to recipe collection in db database

// 2. using get method to "fetch" the data (async function)

// 3. get method returns a promise => resolved(then) or rejected(catch)

// 4. process the resolved snapshot of data collection

// 5. calling function for processed data

// db.collection('recipes').get().then((snapshot)=>{
//     // when we have the data
//     // console.log(snapshot.docs[0].data());
//     snapshot.docs.forEach( doc => {
//         //console.log(doc.data());
//         addRecipe(doc.data(),doc.id);
//     }); 
// }).catch((err)=>{
//     //console.log(err);
// })


//  ADDING DATA TO THE COLLECTION USING "ADD" FUNCTION


form.addEventListener('submit',e=>{
    e.preventDefault();
   
    const now = new Date();
    

    const newRecipe = {
        title : recipe.value,
        created_at : firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('recipes').add(newRecipe).then(()=>{
        console.log("Recipe has been added");
    }).catch((err)=>{
        console.log(err);
    })

});


// DELETING DATA using ID ====

list.addEventListener('click',e=>{
    if(e.target.tagName === 'BUTTON'){
        console.log(e.path[1]);


        const id = e.path[1].dataset.id;
        db.collection('recipes').doc(id).delete().then(()=>{
            console.log("Recipe deleted");
        }).catch((err)=>{
            console.log(err);
        })    
    }
})



