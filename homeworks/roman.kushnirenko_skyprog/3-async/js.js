const loadPage = document.querySelector('[data-loading]');
const allContent = document.querySelector('[data-all-content]');
const dataContentTemplate = document.querySelector('[data-content-template]');
const sortSelect = document.querySelector('[data-sort]');
const filterSearch = document.querySelector('[data-header-filter]');
let arrayJson;

async function getDate() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=35');
        arrayJson = await response.json();
        createArticle(arrayJson);
    } catch (e) {
        alert('Something went wrong, update the page!');
        console.error(e);
    }
}

function loadSite() {
    loadPage.style.display = 'none';
    getDate();
}

setTimeout(loadSite, 3000);

function createArticle(arrDate) {
    arrDate.forEach((show) => {
        const articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
        const articleTitle = articleShow.querySelector('[data-article-title]');
        const articleText = articleShow.querySelector('[data-article-text]');
        articleTitle.textContent = show.title;
        articleText.textContent = show.body;
        allContent.appendChild(articleShow);
        return show;
    });
}

filterSearch.addEventListener('keyup', () => {
    const value = filterSearch.value.toLowerCase();
    const filterFound = arrayJson.filter((item) => item.title.toLowerCase().includes(value));
    if (filterFound.value !== '') {
        allContent.innerHTML = '';
        createArticle(filterFound);
    }
});

sortSelect.addEventListener('change', function () {
    if (this.value === 'a-z') {
        const sortArrayAz = arrayJson.sort((a, b) => a.title.localeCompare(b.title));
        allContent.innerHTML = '';
        createArticle(sortArrayAz);
    } else if (this.value === 'z-a') {
        const sortArrayZa = arrayJson.sort((a, b) => a.title.localeCompare(b.title)).reverse();
        allContent.innerHTML = '';
        createArticle(sortArrayZa);
    }
});

document.addEventListener('click', (event) => {
    if (event.target.closest('[data-remove-btn]')) {
        document.querySelector('[data-article]').remove();
    }
});
