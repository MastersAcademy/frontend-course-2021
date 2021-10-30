const buttonSendMessageEl = document.querySelector('[data-message-send]');
const textValueMessageEl = document.querySelector('[data-message-field]');
const scrollContentEl = document.querySelector('[data-main-container]');
const messageListEl = document.querySelector('[data-container-messages]');
const messageTemplateEl = document.querySelector('[data-message-template]').content;

const listenerButtonDeleted = (messageEl) => {
    messageEl.querySelector('[data-button-delete-message]')
        .addEventListener('click', () => messageEl.remove());
};

const createMessage = () => {
    const messageEl = messageTemplateEl.cloneNode(true).firstElementChild;

    messageEl.querySelector('[data-message-text]')
        .textContent = textValueMessageEl.value;

    listenerButtonDeleted(messageEl);
    messageListEl.append(messageEl);

    textValueMessageEl.value = '';

    scrollContentEl.scrollTop = scrollContentEl.scrollHeight;
};
buttonSendMessageEl.addEventListener('click', () => {
    if (textValueMessageEl.value) createMessage();
});

textValueMessageEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (textValueMessageEl.value) createMessage();
    }
});
