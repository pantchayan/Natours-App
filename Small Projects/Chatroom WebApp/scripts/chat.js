// adding new chat documents 
// setting up real time chat listeners 
// updating username
// updating room
 
// =======================================================================================================

// CLASS METHODOLOGY 

class chatRoom{
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    async addChat(message){
        // this function adds a chat document into the chats collection
        const now = new Date();

        const chat = {
            message: message,
            room: this.room,
            username: this.username,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        const response = await this.chats.add(chat);
        return response;
    }

    

}



let cr = new chatRoom("general","Chayan");

console.log(cr);


cr.addChat("Fancy a game of chess?")
    .then(resolve=>{
        console.log("Chat added");
    }).catch(err=>{
        console.log(err);
    })