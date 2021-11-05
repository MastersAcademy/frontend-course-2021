const input = document.getElementById('textArea');
const button = document.querySelector('button');

function onlySpacesCheck() {
    if (input.value.trim().length > 0) {
        return true;
    }
    return false;
}

function sendMessage() {
    if (input.value.length > 0 && onlySpacesCheck() === true) {
        const message = input.value;
        input.value = '';
        const messageChatHistory = document.createElement('div');
        messageChatHistory.textContent = message;
        messageChatHistory.classList.add('created-message');
        document.body.querySelector('[data-chat]').append(messageChatHistory);
    } else {
        alert('Can not send empty message');
    }
}

button.addEventListener('click', sendMessage);

input.addEventListener('keypress', (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
        sendMessage();
    }
});
