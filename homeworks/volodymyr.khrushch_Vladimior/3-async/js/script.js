const container = document.querySelector('[data-blogs]');
const sorting = document.querySelector('[data-sort]');
const load = document.querySelector('[data-load]');

const renderPosts = async (search) => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    if (search) {
        url += `?_sort=title&_order=${search}`;
    }
    const render = await fetch(url);
    const postBox = await render.json();
    load.style.display = 'none';
    let blogPosts = '';
    postBox.forEach((posts) => {
        blogPosts += `
        <div class='content__posts__card' data-card>
        <h3 class='content__posts__title' data-title>${posts.title}</h3>
        <p class='content__posts__text'>${posts.body}</p>
        </div>
        `;
    });

    container.innerHTML = blogPosts;
};

// Sorting
sorting.addEventListener('change', (event) => {
    const result = `${event.target.value}`;
    renderPosts(result.trim());
});

// Filter

const filter = function () {
    const input = document.querySelector('[data-input]');

    input.addEventListener('keyup', () => {
        const filters = input.value.toLowerCase();
        const filterElements = container.querySelectorAll('[data-title]');

        filterElements.forEach((item) => {
            if (item.innerHTML.toLowerCase().indexOf(filters) > -1) {
                item.closest('[data-card]').style.display = '';
            } else {
                item.closest('[data-card]').style.display = 'none';
            }
        });

    });

};

filter();
renderPosts();
