const mesSendActionEl = document.querySelector('[data-button]');
const messToFillEl = document.querySelector('[data-text]');
const listOfMessages = document.querySelector('[data-list]');

mesSendActionEl.addEventListener('click', (e) => {
    e.preventDefault();
    const element = document.createElement('li');
    element.textContent = messToFillEl.value;
    listOfMessages.appendChild(element);
    messToFillEl.value = '';
});

messToFillEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        mesSendActionEl.click();
    }
});
