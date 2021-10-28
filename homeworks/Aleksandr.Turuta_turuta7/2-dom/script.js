const buttonEl = document.querySelector('[data-message-send]');
const textareaEl = document.querySelector('[data-message-field]');
const scrollEl = document.querySelector('[data-main-window]');
const messageEl = document.querySelector('[data-window-message]');

const templateEl = document.querySelector('#template');
const returnTextContent = templateEl.content.querySelector('[data-text-message]');
const returnDiv = templateEl.content.querySelector('[data-new-message]');

let data = '';
let index = 1;

const addDataValue = (e) => {
    data = e.target.value;
};

const createMessage = () => {
    if (!data.length) return;
    returnTextContent.textContent = data;
    returnDiv.id = index++;
    messageEl.append(templateEl.content.cloneNode(true));
    data = '';
    textareaEl.value = '';
    scrollEl.scrollTop = scrollEl.scrollHeight;
};

const deleteMessage = () => {
    const message2 = document.querySelectorAll('.main-new-message');
    const buttonDEl = document.querySelectorAll('.main-new-button-delete');
    for (let i = 0; i < message2.length; i++) {
        buttonDEl[i].addEventListener('click', () => {
            message2[i].remove(message2[i].id);
        });
    }
};

textareaEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        createMessage();
        deleteMessage();
    }
});

buttonEl.addEventListener('click', () => {
    createMessage();
    deleteMessage();
});

textareaEl.addEventListener('input', addDataValue);
