const list = document.querySelector('[data-list]');
const form = document.querySelector('[data-form]');
const arr = ['hello', 'word', '!!!'];

function createItem(message) {
    const template = document.createElement('li');
    template.classList.add('item');
    template.innerHTML = `<span class="item__message"> ${message} </span><button name="delete" class="item__delete">X</button>`;
    list.appendChild(template);
}

list.addEventListener('click', (e) => {
    if (e.target.name === 'delete') {
        e.target.parentNode.remove();
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputElement = [...e.target].find((el) => el.name && el.name === 'message');
    const message = inputElement.value.trim();
    if (message.length > 0) {
        createItem(message);
        inputElement.value = '';
    }
});

function render() {
    arr.forEach((el) => {
        createItem(el);
    });
}

render();
