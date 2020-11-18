const list = document.querySelector('ul');
const form = document.querySelector('form');

// function to display recipe onto the menu
const addRecipe = (recipe)=>{
    let html = `<li>
                <div>${recipe.title}</div>
                <button class="btn btn-danger btn-sm my-2">delete</button>
                </li>`;
    list.innerHTML += html;
}


// 5 STEPS TO GET DATA FROM FIREBASE :

// 1. getting reference to recipe collection in db database

// 2. using get method to "fetch" the data (async function)

// 3. get method returns a promise => resolved(then) or rejected(catch)

// 4. process the resolved snapshot of data collection

// 5. calling function for processed data

db.collection('recipes').get().then((snapshot)=>{
    // when we have the data
    // console.log(snapshot.docs[0].data());
    snapshot.docs.forEach( doc => {
        console.log(doc.data());
        addRecipe(doc.data());
    });
}).catch((err)=>{
    console.log(err);
})


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



