const btn = document.querySelector('[data-btn]');
const textarea = document.querySelector('[data-textarea]');
const messagesArea = document.querySelector('[data-div]');

function createElement(value) {
    const message = document.createElement('div');
    message.innerText = value;
    messagesArea.append(message);
    message.className = 'message';
    const buttonRemove = document.createElement('button');
    buttonRemove.textContent = 'x';
    buttonRemove.className = 'button-remove';
    message.append(buttonRemove);
    buttonRemove.addEventListener('click', () => {
        messagesArea.removeChild(message);
    });
}

btn.addEventListener('click', () => {
    if (textarea.value === '') return;
    createElement(textarea.value);
    textarea.value = '';
});

textarea.addEventListener('keydown', (event) => {
    if (textarea.value === '') return;
    if (event.key === 'Enter' && !event.shiftKey) {
        createElement(textarea.value);
        event.preventDefault();
        textarea.value = '';
    }
    if (event.shiftKey && event.key === 'Enter') {
        event.preventDefault();
        textarea.value += '\n';
    }
});
