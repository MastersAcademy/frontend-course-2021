function sendMessage () {
    let message = document.querySelector(".messageInput");
    let result = message.value;
    let chatMessage = document.createElement('div');
    mainChat.append(chatMessage);
    chatMessage.className = "chatMessage";
    chatMessage.innerText = result;
    let resultLength = result.length;
    chatMessage.style.width = 40 + 20*result.length + 'px';
    document.querySelector('input[type=text]').value = ""}
const mainChat = document.querySelector('.chatBody');
document.querySelector('#btn').onclick = sendMessage;
document.onkeydown = function( e )  {
    if ( e.key === 13 ) {
        sendMessage()   };
    };
    
    
    
    






