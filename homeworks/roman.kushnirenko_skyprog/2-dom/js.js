const chatMessages = document.querySelector('[data-all-messages]');
const chatFormInput = document.querySelector('[data-text-input]');
const chatFormSubmit = document.querySelector('[data-text-submit]');

const template = document.querySelector('[data-template]');

function createMessage() {
    const messageInput = chatFormInput.value;

    const messageShow = template.content.cloneNode(true).firstElementChild;
    const chatMessageContent = messageShow.querySelector('[data-message-content]');
    const closeMessage = messageShow.querySelector('[data-close-message]');

    chatMessageContent.textContent = messageInput;

    chatMessages.appendChild(messageShow);
    chatFormInput.value = '';

    closeMessage.addEventListener('click', () => {
        messageShow.remove();
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
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
