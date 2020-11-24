// DOM queries 
const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const usernameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//adding a new chat
newChat.addEventListener('submit',e=>{
    e.preventDefault();
    console.log(newChat.message.value);
    ChatRoom.addChat(newChat.message.value)
        .then(()=>newChat.reset())
        .catch((err)=>alert(err));
});


usernameForm.addEventListener('submit',e=>{
    e.preventDefault();
    const name = usernameForm.name.value;
    ChatRoom.updateName(name);
    usernameForm.reset();

    // update message confirmation
    updateMsg.innerHTML += `Name has been updated to ${name}!`;
    setTimeout(()=>{
        updateMsg.innerHTML=``;},1500);
});

// Update chat room 

rooms.addEventListener('click',e=>{
    if(e.target.tagName==='BUTTON'){
        ChatUI.clear();

        const room = e.target.getAttribute('id');
        ChatRoom.updateRoom(room);
        ChatRoom.getChats((data,id,n)=>{
            if(n===1){
                ChatUI.render(data,id);
            }
            else{
                ChatUI.delete(id);
            }
        })
    }
});

// Deleting a message from chat using event delegation

chatList.addEventListener('click',e=>{
    if(e.target.tagName==="I"){
        console.log(e.path[1].dataset.id);

        const id = e.path[1].dataset.id;
        db.collection('chats').doc(id).delete().then(()=>{
            console.log("message deleted");
        }).catch((err)=>{
            console.log(err);
        })
        // ChatRoom.getChats((data,id,n)=>{
        //     if(n===1){
        //         ChatUI.render(data,id);
        //     }
        //     else if(n===2){
        //         ChatUI.delete(id);
        //     }
        // })
    }
})



// checking local storage for a name
const username = localStorage.username? localStorage.username:'Anonymous';

// class instances
const ChatRoom = new chatRoom("general", username);
const ChatUI = new chatUI(chatList);

// get chats and render
ChatRoom.getChats((data,id,n)=>{
    if(n===1){
        ChatUI.render(data,id);
    }
    else if(n===2){
        ChatUI.delete(id);
    }
});