const postAreaEL = document.querySelector('[data-content]');
const sortData = document.querySelector('[data-sort]');
const filterDataEl = document.querySelector('[data-filter]');
const templateEl = document.querySelector('[data-post]');

async function loadPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=20');
    const posts = await response.json();
    return posts;
}

function renderPosts(posts) {
    postAreaEL.innerHTML = '';
    posts.forEach((item) => {
        const postEl = templateEl.content.cloneNode(true);
        postEl.querySelector('[data-title]').textContent = item.title;
        postEl.querySelector('[data-text]').textContent = item.body;
        return postAreaEL.append(postEl);
    });
}

setTimeout(() => {
    loadPosts().then((posts) => {
        renderPosts(posts);

        sortData.addEventListener('change', (event) => {
            if (event.target.value === 'A-Z') {
                posts.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
                renderPosts(posts);
            }

            if (event.target.value === 'Z-A') {
                posts.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
                renderPosts(posts);
            }
        });

        filterDataEl.addEventListener('keyup', () => {
            posts.filter((item) => item.title.toLowerCase()
                .includes(filterDataEl.value.toLowerCase()));
            renderPosts(posts);
        });
    });
    document.querySelector('.loading').style.display = 'none';
}, 3000);
