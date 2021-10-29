const formSendEl = document.querySelector('[data-form-send]');
const messageWrapperEl = document.querySelector('[data-message-wrapper]');
const templateEl = document.querySelector('[data-template]');
formSendEl.addEventListener('submit', (Event) => {
    Event.preventDefault();
    if (formSendEl.submit) {
        const writtenText = document.querySelector('[data-writen-text]').value;
        if (writtenText.length > 0) {
            const cloneNode = templateEl.content.cloneNode(true);
            messageWrapperEl.prepend(cloneNode);
            document.querySelector('[data-message]').textContent = writtenText;
            formSendEl.reset();
        }
    }
});
