const chatMessages = document.querySelector('[data-all-messages]');
const chatFormInput = document.querySelector('[data-text-input]');
const chatFormSubmit = document.querySelector('[data-text-submit]');

const template = document.querySelector('[data-template]');
const containerM = template.content.querySelector('[data-container]');
const chatMessageContent = template.content.querySelector('[data-message-content]');
const closeMessage = template.content.querySelector('[data-close-message]');


function createMessage() {
    const messageInput = chatFormInput.value.replace(/\n/g, '<br/>');
    chatMessageContent.textContent = messageInput;

    const messageShow = template.content.cloneNode(true);
    chatMessages.appendChild(messageShow);
    chatFormInput.value = '';

    closeMessage.addEventListener('click', () => {
        chatMessages.removeChild(containerM);
    });

    chatMessages.scrollTop = 9999;
}

chatFormSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (!chatFormInput.value == '') {
        createMessage();
    }
});

chatFormInput.addEventListener('keypress', (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        createMessage();
    }
});
