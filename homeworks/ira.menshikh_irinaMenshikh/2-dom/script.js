const messageEntryField = document.querySelector('.send-form__content__textarea');
const btnSend = document.querySelector('.send-form__content__button');
const messageContainer = document.querySelector('.message');

function deleteMessage(li) {
    li.addEventListener('click', (event) => {
        if (event.target.className === 'message__content__delete__button') {
            li.remove();
        } return false;
    });
}

function btnClick() {
    const li = document.createElement('LI');
    li.className = 'message__content';
    const messageText = document.createElement('span');
    messageText.className = 'message__content__text';
    messageText.textContent = messageEntryField.value;
    const messageDeleteButton = document.createElement('img');
    messageDeleteButton.className = 'message__content__delete__button';
    messageDeleteButton.src = '../2-dom/icons/delete (1).png';
    li.append(messageText, messageDeleteButton);
    messageContainer.append(li);
    messageEntryField.value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight;

    deleteMessage(li);
}
btnSend.addEventListener('click', btnClick);

messageEntryField.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        btnClick();
    } return false;
});
