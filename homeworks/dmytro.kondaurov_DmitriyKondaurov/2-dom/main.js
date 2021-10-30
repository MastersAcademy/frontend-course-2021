const removeMessage = (event) => {
    const parent = event.target.parentElement;
    if (event.target.className === 'close') {
        parent.remove();
    }
};

const addNewMessage = (text) => {
    const newEl = document.createElement('li');
    const newElCloseBtn = document.createElement('span');
    newEl.classList.add('main-box_msg');
    newElCloseBtn.classList.add('close');
    newEl.textContent = text;
    newElCloseBtn.textContent = '×';
    newEl.appendChild(newElCloseBtn);
    document.body.querySelector('[data-main-box]').append(newEl);
};

const sendMessage = (event) => {
    const newMessageText = document.querySelector('[data-send-txt]').value;
    if (newMessageText) {
        const textBox = document.querySelector('[data-main-box]');
        document.querySelector('[data-send-txt]').value = '';
        addNewMessage(newMessageText);
        textBox.scrollTop = textBox.scrollHeight;
    }
    event.preventDefault();
};

const sendBtn = document.querySelector('[data-send-btn]');
const messageBox = document.querySelector('[data-main-box]');
messageBox.addEventListener('click', removeMessage);
sendBtn.addEventListener('click', sendMessage);
