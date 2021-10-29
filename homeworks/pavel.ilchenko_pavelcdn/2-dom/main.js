const chatTemplate = document.querySelector('[data-meassage-template]'); // шаблон template
const chatForm = document.querySelector('[data-chat-form]'); // форма целиком
const messageBox = document.querySelector('[data-message-box]'); // wrapper куда вставлять текст

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const chatInput = document.querySelector('[data-chat-input]').value;
    const clonedMessage = chatTemplate.content.cloneNode(true);
    if (chatInput > '') {
        messageBox.prepend(clonedMessage);
        document.querySelector('[data-message]').textContent = (chatInput);
    }
    chatForm.reset();
});
// function handleEnter(e) {
//     if (evt.keyCode === 13 && evt.shiftKey) {
//            e.preventDefault();
//     }
// }
