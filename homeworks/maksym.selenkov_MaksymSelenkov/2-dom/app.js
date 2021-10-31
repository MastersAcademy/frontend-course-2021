const mainArea = document.querySelector('[data-main]');
const inputData = document.querySelector('[data-input]');
const buttonSubmit = document.querySelector('[data-submit]');

function insertMessage() {
    if (inputData.value.length > 0) {
        const message = document.createElement('div');
        message.classList.add('message-style');
        message.textContent = inputData.value;
        mainArea.append(message);
        inputData.value = '';
    }
}

buttonSubmit.addEventListener('click', insertMessage);

inputData.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        insertMessage();
    }
});
