const chatMessages = document.querySelector('[data-all_messages]');
const chatFormInput = document.querySelector('[data-text_input]');
const chatFormSubmit = document.querySelector('[data-text_submit]');

chatFormSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (!chatFormInput.value == '') {
        creatMassege();
    }
});

function creatMassege() {
    let chat_message_content = document.createElement('div');
    chat_message_content.className = 'chat_message_content';
    chatMessages.append(chat_message_content);

    let message = chatFormInput.value.replace(/\n/g, '<br/>');
    chatFormInput.value = '';
    chat_message_content.innerHTML = message;

    let close_message = document.createElement('button');
    close_message.textContent = 'x';
    close_message.className = 'close_message';
    chat_message_content.append(close_message);

    chatMessages.scrollTop = 9999;

    close_message.addEventListener('click', () => {
        chatMessages.removeChild(chat_message_content);
    });
};

chatFormInput.addEventListener('keypress', (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        creatMassege();
    }
})
