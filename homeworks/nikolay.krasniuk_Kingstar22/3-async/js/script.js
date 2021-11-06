const templateEl = document.querySelector('[data-template]');
const postTextEl = templateEl.content.querySelector('[data-post-text]');
const postTitleEl = templateEl.content.querySelector('[data-post-title]');
const loaderEl = document.querySelector('[data-loader]');
const postsWindowEl = document.querySelector('[data-publication-block]');
const selectItemEl = document.querySelectorAll('[data-value]');
const entryFilterText = document.querySelector('[data-filter-posts]');

const urlPosts = 'https://jsonplaceholder.typicode.com/posts/?_limit=10';
const arrayPosts = [];
const defaultArrPosts = [];
let methodSort = '0';

const getData = async (url) => {
    const result = await fetch(url);
    const posts = await result.json();
    return posts;
};

function generalPost(arrPosts) {
    postsWindowEl.innerHTML = '';
    arrPosts.forEach((item) => {
        postTextEl.textContent = item.body;
        postTitleEl.textContent = item.title;
        loaderEl.classList.remove('active');
        return postsWindowEl.append(templateEl.content.cloneNode(true));
    });
}

function sortPosts(arrPosts, sortParameter) {
    let arr = arrPosts;
    if (sortParameter === '1') {
        arr = arr.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        generalPost(arr);
    } else if (sortParameter === '2') {
        arr = arr.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        generalPost(arr);
    } else if (sortParameter === '0') {
        generalPost(arr);
    } else {
        generalPost(defaultArrPosts);
    }
}
function filterPosts(arrPosts) {
    let arr = arrPosts;
    arr = arr.filter((item) => item.title.toLowerCase().includes(entryFilterText.value));
    sortPosts(arr, methodSort);
    entryFilterText.value = '';
}

selectItemEl.forEach((item) => {
    item.addEventListener('click', () => {
        const itemValue = item.getAttribute('data-value');
        methodSort = itemValue;
        sortPosts(arrayPosts, itemValue);
    });
});

entryFilterText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filterPosts(arrayPosts);
    }
});

window.addEventListener('load', () => {
    loaderEl.classList.add('active');
    setTimeout(() => {
        getData(urlPosts)
            .then((data) => {
                generalPost(data);
                data.forEach((item) => {
                    arrayPosts.push(item);
                    defaultArrPosts.push(item);
                });
            });
    }, 3000);
});
