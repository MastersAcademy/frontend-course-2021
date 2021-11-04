const messageListEl = document.querySelector('[data-container-messages]');
const postTemplateEl = document.querySelector('[data-post]').content;
const inputFilterEl = document.querySelector('[data-input]');
const buttonSortEl = document.querySelector('[data-button-sort]');

let postsData = [];
let cloneData = [];
buttonSortEl.textContent = 'Sort off';

// 0 - sortUp, 1-sortDown, 3-sor default
let stateSort = 2;

const URL = 'https://jsonplaceholder.typicode.com/posts';

// loading page
const loadingTemplateEl = document.querySelector('[data-loader]').content;
const loadingEl = loadingTemplateEl.cloneNode(true).firstElementChild;
document.querySelector('[data-window-loader]').append(loadingEl);

const dataPosts = async () => {
    const returnPosts = await fetch(URL);
    postsData = await returnPosts.json();
    cloneData = postsData;
};

const render = (data) => {
    if (stateSort === 0) {
        data.sort((a, b) => a.title.localeCompare(b.title));
        buttonSortEl.textContent = 'Sort ▲';
    } else if (stateSort === 1) {
        data.sort((a, b) => b.title.localeCompare(a.title));
        buttonSortEl.textContent = 'Sort ▼';
    } else {
        data.sort((a, b) => a.id - b.id);
        buttonSortEl.textContent = 'Sort off';
    }

    data.forEach((element) => {
        const messageEl = postTemplateEl.cloneNode(true).firstElementChild;
        messageEl.querySelector('[data-title]').textContent = element.title;
        messageEl.querySelector('[data-body]').textContent = element.body;
        messageListEl.append(messageEl);
    });
};

const cleanDataPosts = async () => {
    const parent = document.querySelector('[data-container-messages]');
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
};

setTimeout(() => {
    dataPosts()
        .then(() => loadingEl.remove())
        .then(() => render(postsData))
        .catch((e) => console.log(e));
}, 3000);

buttonSortEl.addEventListener('click', async () => {
    await cleanDataPosts();
    if (stateSort >= 2) stateSort = 0;
    else stateSort++;
    render(cloneData);
});

inputFilterEl.addEventListener('input', async () => {
    await cleanDataPosts();
    cloneData = postsData.filter((item) => item.title.toLowerCase()
        .includes(inputFilterEl.value.toLowerCase()));
    render(cloneData);
});
