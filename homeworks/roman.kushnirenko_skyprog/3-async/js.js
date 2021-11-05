const loadPage = document.querySelector('[data-loading]');
const allContent = document.querySelector('[data-all-content]');
const dataContentTemplate = document.querySelector('[data-content-template]');
const sortSelect = document.querySelector('[data-sort]');
const filterSearch = document.querySelector('[data-header-filter]');
let arrayJson;

function loadSite() {
    async function getDate() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=35');
            arrayJson = await response.json();

            arrayJson.map((show) => {
                const articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
                const articleTitle = articleShow.querySelector('[data-article-title]');
                const articleText = articleShow.querySelector('[data-article-text]');
                const removeBtn = articleShow.querySelector('[data-remove-btn]');
                allContent.appendChild(articleShow);

                articleTitle.textContent = show.title;
                articleText.textContent = show.body;

                removeBtn.addEventListener('click', () => {
                    articleShow.remove();
                });
                return show;
            });


            // Filtering
            filterSearch.addEventListener('keyup', () => {
                const value = filterSearch.value.toLowerCase();
                const filterFound = arrayJson.filter((item) =>
                  item.title.toLowerCase().includes(value));
                if (filterFound.value !== '') {
                    allContent.innerHTML = '';
                    filterFound.map((show) => {
                        const articleShow = 
                          dataContentTemplate.content.cloneNode(true).firstElementChild;
                        const articleTitle = articleShow.querySelector('[data-article-title]');
                        const articleText = articleShow.querySelector('[data-article-text]');
                        const removeBtn = articleShow.querySelector('[data-remove-btn]');
                        allContent.appendChild(articleShow);

                        articleTitle.textContent = show.title;
                        articleText.textContent = show.body;

                        removeBtn.addEventListener('click', () => {
                            articleShow.remove();
                        });
                    },
                );
                }
            });
        } catch (e) {
            alert('Something went wrong, update the page!');
            console.error(e);
        }
    }
    loadPage.style.display = 'none';

    getDate();
}

setTimeout(loadSite, 3000);

// Sorting
sortSelect.addEventListener('change', function () {
    if (this.value === 'sort_a-z') {
        const sortArrayAz = arrayJson.sort((a, b) => a.title.localeCompare(b.title));
            allContent.innerHTML = '';

        sortArrayAz.map((show) => {
            const articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
            const articleTitle = articleShow.querySelector('[data-article-title]');
            const articleText = articleShow.querySelector('[data-article-text]');
            const removeBtn = articleShow.querySelector('[data-remove-btn]');
            allContent.appendChild(articleShow);

            articleTitle.textContent = show.title;
            articleText.textContent = show.body;

            removeBtn.addEventListener('click', () => {
                articleShow.remove();
            });
        });
    }
    else if (this.value === 'sort_z-a') 
    {
        const sortArrayZa = arrayJson.sort((a, b) => a.title.localeCompare(b.title)).reverse();
        allContent.innerHTML = '';

        sortArrayZa.map((show) => {
            const articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
            const articleTitle = articleShow.querySelector('[data-article-title]');
            const articleText = articleShow.querySelector('[data-article-text]');
            const removeBtn = articleShow.querySelector('[data-remove-btn]');
            allContent.appendChild(articleShow);

            articleTitle.textContent = show.title;
            articleText.textContent = show.body;

            removeBtn.addEventListener('click', () => {
                articleShow.remove();
            });
        });
    }
});
