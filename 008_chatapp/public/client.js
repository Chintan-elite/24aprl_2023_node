let socket = io();

var name;
do
{
   name =  prompt("Enter name : ")
}while(!name)


const textarea = document.querySelector("#textarea")
const messageArea = document.querySelector(".message_area")
const username = document.querySelector("#username")
username.innerHTML=name
textarea.addEventListener("keydown",(e)=>{

    if(e.key === 'Enter')
    {
        message(e.target.value)
    }
   

})

function message(data)
{
    var data  = {
        name : name,
        msg :  data
       }
       appendmsg(data,"outgoing")
       socket.emit("message",data)
       textarea.value=""
}


function appendmsg(msg, type) {

  
    const maindiv = document.createElement("div")
    maindiv.classList.add(type, 'message')
    var content = "<h4>" + msg.name + "</h4><p>" + msg.msg + "</p>"
    messageArea.appendChild(maindiv).innerHTML = content
}

socket.on('message',(msg)=>{
    appendmsg(msg,"incoming")
})