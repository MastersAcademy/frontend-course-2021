const articlesAreaEl = document.querySelector('[articles-area]');
const loadingBLockEl = document.querySelector('[loading-window]');
const sortSelectEl = document.querySelector('[article-sort-option]');
const filterInputEl = document.querySelector('[article-filter-input]');
const url = 'https://jsonplaceholder.typicode.com/posts';
const timeDelay = (milliSecond) => new Promise((r) => setTimeout(() => r(), milliSecond));

function sortArticles(articlesArr, sortCondition) {
    const articlesSorted = articlesArr.slice();
    if (sortCondition.value === 'sort-a-z') {
        return articlesSorted.sort((a, b) => ((a.title > b.title) ? 1 : -1));
    }
    if (sortCondition.value === 'sort-z-a') {
        return articlesSorted.sort((a, b) => ((a.title > b.title) ? -1 : 1));
    }
    return articlesArr;
}

function createTemplateArticles(sortedArticles) {
    sortedArticles.forEach((article) => {
        const articleTemplateEl = document.querySelector('[article-template]');
        const articlesCloneTemplate = articleTemplateEl.content.cloneNode(true);
        const articleTitleEl = articlesCloneTemplate.querySelector('[article__title]');
        const articleContentEl = articlesCloneTemplate.querySelector('[article__content]');
        articleTitleEl.textContent = article.title;
        articleContentEl.textContent = article.body;
        articlesAreaEl.append(articlesCloneTemplate);
    });
}

async function fetchArticles() {
    await timeDelay(3000);
    const response = await fetch(url);
    const data = await response.json();
    const articlesDefault = data;
    let sortedArticles = sortArticles(articlesDefault, sortSelectEl);
    createTemplateArticles(sortedArticles);
    loadingBLockEl.classList.add('loading-window--hidden');

    sortSelectEl.addEventListener('change', () => {
        sortedArticles = sortArticles(articlesDefault, sortSelectEl);
        articlesAreaEl.innerHTML = '';
        createTemplateArticles(sortedArticles);
    });

    filterInputEl.addEventListener('input', () => {
        sortedArticles = sortArticles(articlesDefault, sortSelectEl);
        let filteredArticles = sortedArticles.slice();
        filteredArticles = filteredArticles.filter((article) => article.title
            .includes(filterInputEl.value.toLowerCase()));
        articlesAreaEl.innerHTML = '';
        createTemplateArticles(filteredArticles);
    });
}

fetchArticles();
