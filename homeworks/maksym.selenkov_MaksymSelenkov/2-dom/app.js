const mainArea = document.querySelector('[data-main]');
const inputData = document.querySelector('[data-input]');
const buttonSubmit = document.querySelector('[data-submit]');

function createMessage() {
    if (inputData.value.length > 0) {
        const message = document.createElement('div');
        message.classList.add('message-style');
        message.textContent = inputData.value;
        mainArea.append(message);
        inputData.value = '';

        message.insertAdjacentHTML('beforeend', '<img src=\'icon.jpg\' style=\'width: 20px\'>');
        const icons = document.querySelectorAll('img');
        icons.forEach((icon) => {
            icon.addEventListener('click', (event) => {
                event.target.parentNode.remove(event.target);
            });
        });
    }
}

buttonSubmit.addEventListener('click', createMessage);

inputData.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.shiftKey !== true) {
        createMessage();
    }
});

inputData.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.shiftKey) {
        console.log('some magic');
    }
});
