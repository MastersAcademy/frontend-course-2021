const templateEl = document.querySelector('[data-template]');
const postTextEl = templateEl.content.querySelector('[data-post-text]');
const postTitleEl = templateEl.content.querySelector('[data-post-title]');
const loaderEl = document.querySelector('[data-loader]');
const postsWindowEl = document.querySelector('[data-publication-block]');
const selectItemEl = document.querySelectorAll('[data-value]');

const urlPosts = 'https://jsonplaceholder.typicode.com/posts/?_limit=10';
const arrayPosts = [];
const defaultArrPosts = [];

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
    let test = arrPosts;
    if (sortParameter === '1') {
        test = test.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        generalPost(test);
    } else if (sortParameter === '2') {
        test = test.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        generalPost(test);
    } else {
        generalPost(defaultArrPosts);
    }
}

selectItemEl.forEach((item) => {
    item.addEventListener('click', () => {
        const itemValue = item.getAttribute('data-value');
        sortPosts(arrayPosts, itemValue);
    });
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
