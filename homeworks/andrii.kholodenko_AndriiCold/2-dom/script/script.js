const formFieldEl = document.querySelector('[data-form-send]');
const wrapperMessageFieldEl = document.querySelector('[data-message-wrapper]');
const templateFieldEl = document.querySelector('[data-template]');
const messageText = templateFieldEl.content.querySelector('[data-message]');
formFieldEl.addEventListener('submit', (Event) => {
    Event.preventDefault();
    if (formFieldEl.submit) {
        const writtenText = document.querySelector('[data-writen-text]').value;
        if (writtenText.length > 0) {
            messageText.textContent = writtenText;
            const item = templateFieldEl.content.cloneNode(true);
            wrapperMessageFieldEl.prepend(item);
            formFieldEl.reset();
        }
    }
});
