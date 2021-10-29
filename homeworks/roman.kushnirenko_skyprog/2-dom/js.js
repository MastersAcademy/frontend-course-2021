let chat_messages = document.querySelector("[data-all_messages]");
chat_form_input = document.querySelector("[data-text_input]");
chat_form_submit = document.querySelector("[data-text_submit]");

chat_form_submit.addEventListener('click', (event) => {
    event.preventDefault();
    if (!chat_form_input.value == "") {
        creatMassege();
    }
});

function creatMassege() {
    let chat_message_content = document.createElement('div');
    chat_message_content.className = 'chat_message_content';
    chat_messages.append(chat_message_content);

    let message = chat_form_input.value.replace(/\n/g, '<br/>');
    chat_form_input.value = '';
    chat_message_content.innerHTML = message;

    let close_message = document.createElement('button');
    close_message.textContent = 'x';
    close_message.className = 'close_message';
    chat_message_content.append(close_message);

    chat_messages.scrollTop = 9999;

    close_message.addEventListener('click', () => {
        chat_messages.removeChild(chat_message_content);
    });
};

chat_form_input.addEventListener('keypress', (e) => {
    if (!e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        creatMassege();
    }
});
