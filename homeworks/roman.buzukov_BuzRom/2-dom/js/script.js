const list = document.querySelector('[data-list]');
const template = document.querySelector('[data-message-template]');
const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = template.content.cloneNode(true);
    message.querySelector('[data-text]').textContent = form.message_field.value;
    list.appendChild(message);
    form.message_field.value = '';
});

const deleteElement = (e) => {
    if (e.target.hasAttribute('data-delete') || e.target.hasAttribute('data-emoji')) {
        e.target.closest('[data-message]').remove();
    }
};

list.addEventListener('click', deleteElement);
