/**
 * Selectors:
 */
const selectOrderField = document.querySelector('[data-role="blog-select-order"]');
const searchInputField = document.querySelector('[data-role="blog-input-search"]');
const mainField = document.querySelector('[data-role="blog-main-section"]');
const orderOptions = document.querySelectorAll('[data-role="blog-option-order"]');
/** Set order values for option tags */
Object.keys(orderBy).forEach((orderName, index) => orderOptions[index].value = orderName);
/**
 * variables for keeping initial data from response and titles in lower case
 */
let initialData = null;
let titlesWithLowerCase = null;
/**
 *  Functions:
 */
function displayArticles(articles) {
   mainField.innerHTML = articles.map((article) => `
      <article class="blog-article">
        <h2 class="blog-article-title">${article.title}</h2>
        <p class="blog-article-text">${article.body}<p>
      </article>
   `).join('');
}

async function initApp() {
    mainField.classList.add('loader');
    initialData = await (new Promise((resolve) => setTimeout(() => {
      mainField.classList.remove('loader');
      resolve(getArticles());
    }, 3000)));
    titlesWithLowerCase = initialData.map(article => article.title.toLowerCase());
    stateStorage.data = [...initialData];
    displayArticles(initialData);
}
/**
 * Event listeners:
 */
selectOrderField.addEventListener('change', (event) => {
    stateStorage.order = event.target.value;
    displayArticles(orderBy[stateStorage.order](stateStorage.data));
});

searchInputField.addEventListener('input', (event) => {
    const inputText = event.target.value.trim().toLowerCase();
    stateStorage.data = initialData.filter((_, index) => titlesWithLowerCase[index].includes(inputText));
    displayArticles(orderBy[stateStorage.order](stateStorage.data));
});
/**
 * launch app
 */
(async () => await initApp())();