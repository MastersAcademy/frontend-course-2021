const buttonSendMessageEl = document.querySelector('[data-message-send]');
const textValueMessageEl = document.querySelector('[data-message-field]');
const scrollContentEl = document.querySelector('[data-main-container]');
const messageListEl = document.querySelector('[data-container-messages]');

let index = 1;

const listenerButtonDeleted = (buttonDeleteMessage) => {
    buttonDeleteMessage.addEventListener('click', () => {
        document.querySelector(`[data-number-message="${buttonDeleteMessage.dataset.buttonDelete}"]`).remove();
    });
};

const createMessage = () => {
    const messageTemplateEl = document.querySelector('[data-message-template]').content;

    const messageEl = messageTemplateEl.cloneNode(true);

    messageEl.querySelector('[data-message-text]')
        .textContent = textValueMessageEl.value;

    messageEl.querySelector('[data-new-message]')
        .setAttribute('data-number-message', index);

    const buttonDeleteMessage = messageEl.querySelector('[data-button-delete-message]');
    buttonDeleteMessage.setAttribute('data-button-delete', index++);

    messageListEl.append(messageEl);

    textValueMessageEl.value = '';

    scrollContentEl.scrollTop = scrollContentEl.scrollHeight;

    listenerButtonDeleted(buttonDeleteMessage);
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
