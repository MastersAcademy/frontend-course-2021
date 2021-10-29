const mainChat = document.querySelector('.chat__body');
function sendMessage() {
    const message = document.querySelector('.message__input');
    const result = message.value;
    const chatMessage = document.createElement('div');
    mainChat.append(chatMessage);
    chatMessage.className = 'chat__message';
    chatMessage.innerText = result;
    document.querySelector('input[type=text]').value = '';
}
document.querySelector('#btn').onclick = sendMessage;
document.onkeydown = function (e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
};
