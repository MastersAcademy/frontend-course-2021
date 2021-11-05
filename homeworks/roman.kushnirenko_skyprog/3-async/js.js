const loadPage = document.querySelector('.loading');
let blog = document.querySelector('.blog');
let allContent = document.querySelector('.content');
let dataContentTemplate = document.querySelector('[data-content-template]');
const sortSelect = document.querySelector('[data-sort]');
const filterSearch = document.querySelector('[data-header-filter]');
let arrayJson;

function loadSite() {

    async function getDate() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=35');
            arrayJson = await response.json();

            arrayJson.map(
                function ShowDate(show) {
                    let articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
                    let articleTitle = articleShow.querySelector('.article__title');
                    let articleText = articleShow.querySelector('.article__text');
                    const removeBtn = articleShow.querySelector('[data-remove-btn]');
                    allContent.appendChild(articleShow);

                    articleTitle.textContent = show.title;
                    articleText.textContent = show.body;

                    removeBtn.addEventListener('click', function () {
                        articleShow.remove();
                    })
                }
            );

            filterSearch.addEventListener('keyup', () => {
                const value = filterSearch.value.toLowerCase();
                filterFound = arrayJson.filter((item) => item.title.toLowerCase().includes(value));
                if (filterFound.value !== '') {
                    allContent.innerHTML = '';
                    filterFound.map(
                        function ShowDate(show) {
                            let articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
                            let articleTitle = articleShow.querySelector('.article__title');
                            let articleText = articleShow.querySelector('.article__text');
                            allContent.appendChild(articleShow);

                            articleTitle.textContent = show.title;
                            articleText.textContent = show.body;
                        }
                    );
                }
            });
        } catch (e) {
            alert("Error loading, update the page please!")
            console.error(e)
        }
    }
    loadPage.style.display = 'none';
    getDate()
}
setTimeout(loadSite, 3000);

// Sorting
sortSelect.addEventListener('change', function () {
    if (this.value == 'sort_a-z') {
        let sortArrayAz = arrayJson.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
        allContent.innerHTML = '';

        sortArrayAz.map(
            function ShowDate(show) {
                let articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
                let articleTitle = articleShow.querySelector('.article__title');
                let articleText = articleShow.querySelector('.article__text');
                const removeBtn = articleShow.querySelector('[data-remove-btn]');
                allContent.appendChild(articleShow);

                articleTitle.textContent = show.title;
                articleText.textContent = show.body;

                removeBtn.addEventListener('click', function () {
                    articleShow.remove();
                })
            }
        );
    }
    else if (this.value == 'sort_z-a') {
        let sortArrayZa = arrayJson.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0).reverse();
        allContent.innerHTML = '';

        sortArrayZa.map(
            function ShowDate(show) {

                let articleShow = dataContentTemplate.content.cloneNode(true).firstElementChild;
                let articleTitle = articleShow.querySelector('.article__title');
                let articleText = articleShow.querySelector('.article__text');
                const removeBtn = articleShow.querySelector('[data-remove-btn]');
                allContent.appendChild(articleShow);

                articleTitle.textContent = show.title;
                articleText.textContent = show.body;

                removeBtn.addEventListener('click', function () {
                    articleShow.remove();
                })
            }
        );
    }
})
