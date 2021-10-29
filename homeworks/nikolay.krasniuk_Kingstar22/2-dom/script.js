const messageWindow = document.querySelector('[data-message]');
const entryTextarea = document.querySelector('[data-textarea]');
const sendBtn = document.querySelector('[data-btn]');
const template = document.querySelector('[data-template]');
const messageText = template.content.querySelector('[data-message-text]');

const messagesArray = [];

function generalMessage(item) {
    messageText.textContent = item;
    messageWindow.append(template.content.cloneNode(true));
}

function addMessage() {
    const messageObj = {
        message: entryTextarea.value,
    };
    messagesArray.push(messageObj);
    const newMessage = messagesArray[messagesArray.length - 1].message;
    generalMessage(newMessage);
    entryTextarea.value = '';
}

sendBtn.addEventListener('click', addMessage);

entryTextarea.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addMessage();
    }
});
