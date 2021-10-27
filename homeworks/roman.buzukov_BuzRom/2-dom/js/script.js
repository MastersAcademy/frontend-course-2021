const list = document.querySelector('[data-list]');
const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const message = document.createElement('li');
    message.className = 'content__message';
    const btn = document.createElement('button');
    btn.className = 'content__delete';
    btn.setAttribute('data-delete', '');
    const text = document.createElement('p');
    text.setAttribute('style', 'white-space: pre-line');

    btn.textContent = 'X';
    text.textContent = form.textarea.value;
    message.appendChild(btn);
    message.appendChild(text);
    list.appendChild(message);
    form.textarea.value = '';
});

const deleteElement = (e) => {
    if (e.target.hasAttribute('data-delete')) {
        e.target.parentElement.remove();
    } else if (e.target.hasAttribute('data-emoji')) {
        e.target.parentElement.parentElement.remove();
    }
};

document.addEventListener('click', deleteElement);
