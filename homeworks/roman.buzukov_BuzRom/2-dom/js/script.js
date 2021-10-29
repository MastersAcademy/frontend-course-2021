const list = document.querySelector('[data-list]');
const template = document.querySelector('[data-message-template]');
const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = template.content.cloneNode(true);
    message.querySelector('[data-message]').textContent = form.textarea.value;
    list.appendChild(message);
    form.textarea.value = '';
});

const deleteElement = (e) => {
    if (e.target.hasAttribute('data-delete')) {
        e.target.parentElement.remove();
    } else if (e.target.hasAttribute('data-emoji')) {
        e.target.closest('li').remove();
    }
};

document.addEventListener('click', deleteElement);
