const preloader = document.querySelector('[data-preloader]');
const list = document.querySelector('[data-list]');
const selectEl = document.querySelector('[data-select]');
const filterEl = document.querySelector('[data-filter]');
let state = [];

function createItem({ title, body }) {
    const template = document.createElement('div');
    template.classList.add('item');
    template.innerHTML = `
        <h3 class="item__title"> ${title}</h3>
        <p class="item__text">${body}</p>
        <button name="delete" class="item__delete">Х</button>`;
    list.appendChild(template);
}

const sortByAlphabet = (titleA, titleB) => {
    if (titleA > titleB) { return 1; }
    if (titleA < titleB) { return -1; }
    return 0;
};

const sortByAlphabetReverce = (titleA, titleB) => sortByAlphabet(titleB, titleA);

function sortAndFilterPost() {
    const userInput = filterEl.value;
    const filterValue = userInput.toLowerCase();
    const sortValue = selectEl.value;
    const filteredArr = state.filter(({ title }) => title.includes(filterValue));
    filteredArr.sort((a, b) => {
        const [titleA, titleB] = [a.title, b.title];
        if (sortValue === 'default') return 0;
        if (sortValue === 'az') return sortByAlphabet(titleA, titleB);
        return sortByAlphabetReverce(titleA, titleB);
    });
    return filteredArr;
}

async function getPost(url) {
    return fetch(url).then((res) => res.json());
}

function render(arr) {
    arr.forEach((el) => {
        createItem(el);
    });
}

list.addEventListener('click', (e) => {
    if (e.target.name === 'delete') {
        e.target.parentNode.remove();
    }
});

selectEl.addEventListener('change', (e) => {
    e.preventDefault();
    list.innerHTML = '';
    const sortedArr = sortAndFilterPost();
    render(sortedArr);
});

filterEl.addEventListener('keyup', (e) => {
    e.preventDefault();
    list.innerHTML = '';
    const sortedArr = sortAndFilterPost();
    render(sortedArr);
});

async function init() {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    const data = await getPost(baseUrl);
    state = data;
    setTimeout(() => {
        preloader.classList.add('hide');
        render(data);
    }, 3000);
}

init();
