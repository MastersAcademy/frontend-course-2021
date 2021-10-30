const addNewMessage = (text) => {
    const newEl = document.createElement('li');
    document.body.querySelector('[data-main-box]').append(newEl);
    newEl.classList.add('main-box_msg');
    newEl.textContent = text;
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
sendBtn.addEventListener('click', sendMessage);
