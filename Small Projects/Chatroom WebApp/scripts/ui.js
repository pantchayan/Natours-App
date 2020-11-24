// render chat templates to the DOM
// clear the list of chats  (when the room changes)

class chatUI{
    constructor(list){
        this.list = list;
    }
    clear(){
        this.list.innerHTML = ``;
    }
    render(data,id){
        //data ==> chat object
        const prev = data.created_at.toDate().getTime();
        const curr = new Date().getTime();
        const when = timeDifference(curr,prev);
        const html = `
            <li class="list-group-item" data-id="${id}">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <i class="far fa-trash-alt delete"></i>
                <div class="time">${when}</div>
            </li>
        `;  

        // console.log("I am inside render");
        this.list.innerHTML += html;
    }

    delete(id){
        const lists = this.list.getElementsByTagName("li");
        // console.log(lists);
        for (var i = 0, len = lists.length; i < len; i++ ) {
            if(lists[i].getAttribute('data-id')===id){
                    // console.log(lists[i]);
                    lists[i].remove();
            }
        }
        // this.list.forEach(item=>{
        //     if(item.getAttribute('data-id')===id){
        //         console.log(item);
        //         item.remove();
        //     }
        // })
    }
}

function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
        return Math.round(elapsed/msPerDay) + ' days ago';   
    }

    else if (elapsed < msPerYear) {
        return Math.round(elapsed/msPerMonth) + ' months ago';   
    }

    else {
        return  Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}