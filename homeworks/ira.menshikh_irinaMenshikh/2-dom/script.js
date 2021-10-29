let messageEntryField = document.querySelector('.send-form__content__textarea');
let btnSend = document.querySelector('.send-form__content__button');
let messageContainer = document.querySelector('.message');



function btnClick() {
    let li = document.createElement('LI');
    li.className = 'message__content';
    let messageText = document.createElement('span');
    messageText.className = 'message__content__text';
    messageText.textContent = messageEntryField.value;
    let messageDeleteButton = document.createElement('img');
    messageDeleteButton.className = 'message__content__delete__button';
    messageDeleteButton.src = '../2-dom/icons/delete (1).png';
    li.append(messageText, messageDeleteButton);
    messageContainer.append(li);

    messageEntryField.value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight;

    deleteMessage(li);
}
btnSend.addEventListener('click', btnClick);

function deleteMessage(li) {
    li.addEventListener('click', (event) => {
        if (event.target.className === 'message__content__delete__button') {
            li.remove();
        } else {
            return;
        }
    });
}

messageEntryField.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        btnClick();
    } else {
        return;
    }
});
