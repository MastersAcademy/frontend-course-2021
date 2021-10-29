let messageForm = document.querySelector('.input-form');
let messageList = document.querySelector('.messages-list');
let messageField = document.querySelector('.input-form__field');

messageForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newMessage = document.createElement('li');
    newMessage.classList.add('messages-list__item');
    newMessage.textContent = messageField.value;
    messageField.value = '';
    messageList.append(newMessage);
};