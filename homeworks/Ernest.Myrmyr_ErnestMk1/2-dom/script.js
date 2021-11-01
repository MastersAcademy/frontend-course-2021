const msgFromUserEl = document.querySelector('[data-text]');
const listOfMessages = document.querySelector('[data-list]');
const formEl = document.querySelector('[data-form]');

formEl.addEventListener('submit', (el) => {
    el.preventDefault();
    const element = document.createElement('li');
    element.textContent = msgFromUserEl.value;
    listOfMessages.appendChild(element);
    msgFromUserEl.value = '';
});
