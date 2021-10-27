function sendMessage() {
    const message = document.querySelector('.messageInput');
    const result = message.value;
    const chatMessage = document.createElement('div');
    mainChat.append(chatMessage);
    chatMessage.className = 'chatMessage';
    chatMessage.innerText = result;
    chatMessage.style.width = 40 + 20*result.length + 'px';
    document.querySelector('input[type=text]').value = ""}
const mainChat = document.querySelector('.chatBody');
document.querySelector('#btn').onclick = sendMessage;
document.onkeydown = function( e )  {
    if ( e.keyCode === 13)  {
        sendMessage()       };
    };
    

    
    
    






