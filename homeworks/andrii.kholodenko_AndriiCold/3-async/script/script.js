const loadEl = document.querySelector('[data-load]');
const pageBodyWrapperEl = document.querySelector('[data-page-body-wrapper]');
const templateEl = document.querySelector('[data-template]');
const mainContentEL = document.querySelector('[data-main-content]');
const filterEl = document.querySelector('[data-filter]');
const sortEl = document.querySelector('[data-sort]');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadEl.className = 'load_content ';
        pageBodyWrapperEl.className = 'page_body_wrapper';
    }, 3000);
});

function createPost(elementArray) {
    mainContentEL.textContent = '';
    elementArray.forEach((elementBlog) => {
        const postEL = templateEl.content.cloneNode(true);
        postEL.querySelector('[data-title]').textContent = elementBlog.title;
        postEL.querySelector('[data-text]').textContent = elementBlog.body;
        mainContentEL.append(postEL);
    });
}

function sort(dataArray) {
    const filterArrayCopy = Array.from(dataArray);
    sortEl.addEventListener('change', () => {
        if (sortEl.value === 'Sort') {
            createPost(dataArray);
        }
        if (sortEl.value === 'A-z') {
            filterArrayCopy.sort((a, b) => a.title.localeCompare(b.title));
            createPost(filterArrayCopy);
        }
        if (sortEl.value === 'Z-a') {
            filterArrayCopy.sort((a, b) => b.title.localeCompare(a.title));
            createPost(filterArrayCopy);
        }
    });
}

function filterSort(dataArray) {
    createPost(dataArray);
    sort(dataArray);
    filterEl.addEventListener('input', () => {
        sortEl.selectedIndex = 0;
        const filterArray = dataArray.filter((word) => word.title.includes(filterEl.value));
        createPost(filterArray);
        sort(filterArray);
    });
}

fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=25`')
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .then((data) => filterSort(data));
