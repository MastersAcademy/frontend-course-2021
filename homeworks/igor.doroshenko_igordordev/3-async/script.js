const articlesList = document.querySelector('.articles-area');
const loadingBLock = document.querySelector('.loading-window');
const url = 'https://jsonplaceholder.typicode.com/posts';
const sortSelect = document.querySelector('[article-sort-option]');
const filterInput = document.querySelector('[article-filter-input]');
const timeDelay = (milliSecond) => new Promise((r) => setTimeout(() => r(), milliSecond));

function sortArticles(articlesArr, sortCondition) {
    let articlesSorted = articlesArr.slice();
    if (sortCondition.value === 'sort-a-z') {
        return articlesSorted.sort((a, b) => ((a.title > b.title) ? 1 : -1));
    }
    if (sortCondition.value === 'sort-z-a') {
        return articlesSorted.sort((a, b) => ((a.title > b.title) ? 1 : -1)).reverse();
    }
    return articlesArr;
}

function createArticles(sortedArticles) {
    sortedArticles.forEach((article) => {
        const newArticle = document.createElement('article');
        const newArticleHeader = document.createElement('h2');
        const newArticleContent = document.createElement('p');
        newArticleHeader.classList.add('article__title');
        newArticleHeader.textContent = article.title;
        newArticleContent.classList.add('article__content');
        newArticleContent.textContent = article.body;
        newArticle.classList.add('articles-area__article', 'article');
        newArticle.appendChild(newArticleHeader);
        newArticle.appendChild(newArticleContent);
        articlesList.append(newArticle);
    });
}

async function fetchArticles() {
    await timeDelay(3000);
    const response = await fetch(url);
    const data = await response.json();
    const articlesDefault = data;
    let sortedArticles = sortArticles(articlesDefault, sortSelect);
    createArticles(sortedArticles);
    loadingBLock.classList.add('loading-window--hidden');

    sortSelect.addEventListener('change', () => {
        sortedArticles = sortArticles(articlesDefault, sortSelect);
        articlesList.innerHTML = '';
        createArticles(sortedArticles);
    });

    filterInput.addEventListener('input', () => {
        sortedArticles = sortArticles(articlesDefault, sortSelect);
        let filteredArticles = sortedArticles.slice();
        filteredArticles = filteredArticles.filter((article) => article.title
            .includes(filterInput.value.toLowerCase()));
        articlesList.innerHTML = '';
        createArticles(filteredArticles);
    });
}

fetchArticles();
