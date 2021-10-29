const button = document.querySelector('[data-button]');
const textarea = document.querySelector('[data-text]');
const listOfMessages = document.querySelector('[data-list]');

button.addEventListener('click', () => {
    const element = document.createElement('li');
    element.innerHTML = textarea.value;
    listOfMessages.appendChild(element);
    textarea.value = '';
});

textarea.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        button.click();
    }
})
