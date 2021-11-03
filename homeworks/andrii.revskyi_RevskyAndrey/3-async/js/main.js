const list = document.querySelector('[data-list]');

function createItem({ title, body }) {
    const template = document.createElement('div');
    template.classList.add('item');
    template.innerHTML = `<h3> ${title}</h3> <p>${body}</p> <button name="delete" class="item__delete">X</button>`;
    list.appendChild(template);
}

list.addEventListener('click', (e) => {
    if (e.target.name === 'delete') {
        e.target.parentNode.remove();
    }
});

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const inputElement = [...e.target].find((el) => el.name && el.name === 'message');
//     const message = inputElement.value.trim();
//     if (message.length > 0) {
//         createItem(message);
//         inputElement.value = '';
//     }
// });

async function getPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url).then((res) => res.json());
    return response;
}

async function render() {
    const arr = await getPost();
    console.log(arr);
    arr.forEach((el) => {
        console.log({ el });
        createItem(el);
    });
}

render();
