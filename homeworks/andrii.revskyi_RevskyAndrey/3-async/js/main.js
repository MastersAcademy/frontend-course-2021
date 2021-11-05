const preloader = document.querySelector('[data-preloader]');
const list = document.querySelector('[data-list]');
const selectEl = document.querySelector('[data-select]');
const filterEl = document.querySelector('[data-filter]');

function createItem({ title, body }) {
    const template = document.createElement('div');
    template.classList.add('item');
    template.innerHTML = `
        <h3 class="item__title"> ${title}</h3>
        <p class="item__text">${body}</p>
        <button name="delete" class="item__delete">Х</button>`;
    list.appendChild(template);
}

list.addEventListener('click', (e) => {
    if (e.target.name === 'delete') {
        e.target.parentNode.remove();
    }
});

selectEl.addEventListener('change', (e) => {
    e.preventDefault();
    console.log(selectEl.value);
});

filterEl.addEventListener('keyup', (e) => {
    e.preventDefault();
    console.log(filterEl.value);
});

async function getPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url).then((res) => res.json());
    return response;
}

function render(arr) {
    arr.forEach((el) => {
        createItem(el);
    });
}

async function init() {
    const data = await getPost();
    setTimeout(() => {
        preloader.classList.add('hide');
        render(data);
    }, 3000);
}

init();
