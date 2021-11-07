const inputForm = document.querySelector('[data-message-form]');
const inputEl = document.querySelector('[data-message-input]');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const messageListEl = document.querySelector('[data-message-otput]');
    const messageTemplateEl = document.querySelector('[data-message-template]');
    const newMessage = inputEl.value;

    if (newMessage) {
        const messageEl = messageTemplateEl.content.cloneNode(true);
        messageEl.querySelector('[data-message-text]').textContent = newMessage;
        messageListEl.appendChild(messageEl);

        inputEl.value = '';
    }
});
