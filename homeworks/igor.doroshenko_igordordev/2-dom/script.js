const messageForm = document.querySelector('.input-form');
const messageList = document.querySelector('.messages-list');
const messageField = document.querySelector('.input-form__field');

messageForm.onsubmit = function (evt) {
    evt.preventDefault();

    const newMessage = document.createElement('li');
    newMessage.classList.add('messages-list__item');
    newMessage.textContent = messageField.value;
    messageField.value = '';
    messageList.append(newMessage);
};
