const chatField = document.querySelector('[data-chat-field]');
const messageInputField = document.querySelector('[data-input-message]');
function sendMessage(event) {
    event.preventDefault();
    const message = messageInputField.querySelector('[data-input-message]');
    if (message.value.length !== 0) {
        const template = document.querySelector('[data-chat-field-element]');
        const textMessageEl = template.content.querySelector('[data-message]');
        textMessageEl.textContent = message.value;
        const cloneMessage = template.content.cloneNode(true);
        chatField.append(cloneMessage);
        template.className = 'chat__message';
        messageInputField.reset();
    }  
}
messageInputField.addEventListener('submit', sendMessage);
