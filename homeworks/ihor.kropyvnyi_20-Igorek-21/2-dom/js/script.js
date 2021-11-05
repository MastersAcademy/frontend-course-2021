const formInput = document.querySelector('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');
const messageList = document.querySelector('[data-message-list]');
const templateItem = document.querySelector('[data-tamplate-item]');
const item = templateItem.content.querySelector('[data-item]');
function massage(evt) {
    if (formInput.value) {
        evt.preventDefault();
        item.textContent = formInput.value;
        const a = templateItem.content.cloneNode(true);
        messageList.prepend(a);
        formInput.value = '';
    } else {
        formInput.classList.remove('error');
        formInput.classList.add('error');
    }
}
formBtn.addEventListener('click', (evt) => {
    massage(evt);
});
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter') {
        massage(evt);
    }
});
