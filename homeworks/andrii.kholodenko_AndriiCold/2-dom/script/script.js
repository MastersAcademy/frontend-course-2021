const formSendEl = document.querySelector('[data-form-send]');
const messageWrapperEl = document.querySelector('[data-message-wrapper]');
const templateEl = document.querySelector('[data-template]');
formSendEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const writtenText = document.querySelector('[data-writen-text]').value;
    if (writtenText.length > 0) {
        const messageEL = templateEl.content.cloneNode(true);
        messageEL.querySelector('[data-message]').textContent = writtenText;
        messageWrapperEl.prepend(messageEL);
        formSendEl.reset();
    }
});
