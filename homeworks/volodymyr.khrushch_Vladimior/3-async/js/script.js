const containerEl = document.querySelector('[data-blogs]');
const sortingEl = document.querySelector('[data-sort]');
const loadEl = document.querySelector('[data-load]');

const renderPosts = async (sorting) => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    if (sorting) {
        url += `?_sort=title&_order=${sorting}`;
    }
    const processing = await fetch(url);
    const postBox = await processing.json();
    addPosts(postBox);
};

// Sorting
sortingEl.addEventListener('change', (event) => {
    const result = event.target.value;
    renderPosts(result.trim());
});

// Filter
document.querySelector('[data-input]').addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();

    containerEl.querySelectorAll('[data-title]').forEach((element) => {
        element.closest('[data-card]').hidden = element.innerText.toLowerCase().includes(val)
            ? false
            : true;
    });
});

// add posts
const addPosts = async (result) => {

    const addPostBox = await result;
    let blogPosts = '';

    addPostBox.forEach((posts) => {
        blogPosts += `
        <section class='content__posts__card' data-card>
        <h3 class='content__posts__title' data-title>${posts.title}</h3>
        <p class='content__posts__text'>${posts.body}</p>
        </section>
        `;
    });

    loadEl.style.display = 'none';
    containerEl.innerHTML = blogPosts;
};

renderPosts();
