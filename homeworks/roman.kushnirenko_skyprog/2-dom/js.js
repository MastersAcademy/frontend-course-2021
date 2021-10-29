const chatMessages = document.querySelector('[data-all_messages]');
const chatFormInput = document.querySelector('[data-text_input]');
const chatFormSubmit = document.querySelector('[data-text_submit]');

function creatMassege() {
    const chatMessageContent = document.createElement('div');
    chatMessageContent.className = 'chat_message_content';
    chatMessages.append(chatMessageContent);

    const message = chatFormInput.value.replace(/\n/g, '<br/>');
    chatFormInput.value = '';
    chatMessageContent.innerHTML = message;

    const closeMessage = document.createElement('button');
    closeMessage.textContent = 'x';
    closeMessage.className = 'close_message';
    chatMessageContent.append(closeMessage);

    chatMessages.scrollTop = 9999;

    closeMessage.addEventListener('click', () => {
        chatMessages.removeChild(chatMessageContent);
    });
}

chatFormSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if (!chatFormInput.value == '') {
        creatMassege();
    }
});

chatFormInput.addEventListener('keypress', (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        creatMassege();
    }
});
