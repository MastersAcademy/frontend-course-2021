const sendMessage = (event) => {
    if (document.querySelector('[data-send-txt]').value) {
        const textBox = document.querySelector('[data-main-box]');
        const newMessageText = document.querySelector('[data-send-txt]').value;
        document.querySelector('[data-send-txt]').value = '';
        const newEl = document.createElement('li');
        newEl.textContent = newMessageText;
        newEl.classList.add('main-box_msg');
        document.body.querySelector('[data-main-box]').append(newEl);
        textBox.scrollTop = textBox.scrollHeight;
    }
    event.preventDefault();
};
const sendBtn = document.querySelector('[data-send-btn]');
sendBtn.addEventListener('click', sendMessage, false);
