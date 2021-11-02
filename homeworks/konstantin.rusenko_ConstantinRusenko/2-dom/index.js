const addButton = document.querySelector('[data-add-button]');
const input = document.querySelector('[data-input]');
const messageWindow = document.querySelector('[data-chat-window]');

const createNewMessage = () => {
    const message = input.value;
    if (message.length === 0) return;
    input.value = '';
    const newMessage = document.createElement('div');
    newMessage.classList.add('new-message');
    newMessage.innerHTML = message;
    const delButton = document.createElement('button');
    delButton.classList.add('del-button');
    delButton.innerHTML = 'X';
    messageWindow.appendChild(newMessage);
    newMessage.appendChild(delButton);
};

addButton.addEventListener('click', () => {
    createNewMessage();
});

input.addEventListener('keydown', (e) => {
    const key = e.which || e.key;
    if (key === 13 && !e.shiftKey) {
        e.preventDefault();
        createNewMessage();
    }
});

messageWindow.addEventListener('click', (event) => {
    const delMessage = event.target;
    if (delMessage.textContent === 'X') delMessage.parentNode.remove();
});
