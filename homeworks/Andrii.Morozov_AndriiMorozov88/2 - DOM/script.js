const mainChat = document.querySelector('.chatBody');
function sendMessage() {
    const message = document.querySelector('.messageInput');
    const result = message.value;
    const chatMessage = document.createElement('div');
    mainChat.append(chatMessage);
    chatMessage.className = 'chatMessage';
    chatMessage.innerText = result;
    document.querySelector('input[type=text]').value = '';
}
document.querySelector('#btn').onclick = sendMessage;
document.onkeydown = function (e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
};