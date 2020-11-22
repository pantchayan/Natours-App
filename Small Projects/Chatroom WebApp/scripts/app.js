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
        ChatRoom.getChats(data=>{
            ChatUI.render(data);
        })
    }
});

// checking local storage for a name
const username = localStorage.username? localStorage.username:'Anonymous';

// class instances
const ChatRoom = new chatRoom("general", username);
const ChatUI = new chatUI(chatList);

// get chats and render
ChatRoom.getChats(data=>{
    ChatUI.render(data);
});