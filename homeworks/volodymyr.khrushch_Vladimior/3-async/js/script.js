const container = document.querySelector('[data-blogs]');
const sorting = document.querySelector('[data-sort]');
const load = document.querySelector('[data-load]');

const renderPosts = async (search) => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    if (search) {
        url += `?_sort=title&_order=${search}`;
    }
    const render = await fetch(url);
    const posts = await render.json();
    load.style.display = 'none';
    let blogPosts = '';
    let postsRender = posts;
    postsRender.forEach((posts) => {
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
document.querySelector('[data-input]').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();

    container.querySelectorAll('[data-title]').forEach((term) => {
        term.closest('[data-card]').style.display = term.innerText.toLowerCase().includes(val)
            ? 'block'
            : 'none';
    });
});

renderPosts();
