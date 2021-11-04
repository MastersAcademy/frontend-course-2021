const containerEl = document.querySelector('[data-container]');
const listEl = document.querySelector('[data-list]');
const templateEl = document.querySelector('[data-post-template]');
const sortEl = document.querySelector('[data-sort]');
const filterEl = document.querySelector('[data-filter]');
const remove = document.getElementsByClassName('post__delete-img');
const posts = [];
let filtered = posts;

const deletePost = (e) => {
    if (e.target) {
        const post = e.target.closest('[data-post]');
        post.setAttribute('style', 'visibility: hidden');
        containerEl.classList.remove('loaded');
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then(() => {
                    alert('Post deleted');
                    filtered = filtered.filter((item) => +post.id !== item.id);
                    post.remove();
                })
                .catch(() => {
                    alert('Something went wrong');
                    post.setAttribute('style', 'visibility: visible');
                });
            containerEl.classList.add('loaded');
        }, 1000);
    }
};

const addDeleteListener = () => {
    Array.from(remove).forEach((item) => {
        item.addEventListener('click', deletePost);
    });
};

const renderPosts = (postsArray) => {
    listEl.innerHTML = '';
    postsArray.map((element) => {
        const item = templateEl.content.cloneNode(true);
        item.querySelector('[data-post]').setAttribute('id', `${element.id}`);
        item.querySelector('[data-title]').textContent = element.title;
        item.querySelector('[data-body]').textContent = element.body;
        addDeleteListener();
        return listEl.appendChild(item);
    });
};

window.addEventListener('load', () => {
    if (containerEl) {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/?_limit=30')
                .then((response) => response.json())
                .then((data) => {
                    data.forEach((item) => posts.push(item));
                    renderPosts(posts);
                });
            containerEl.classList.add('loaded');
        }, 3000);
    }
});

sortEl.addEventListener('change', (e) => {
    if (e.target.value === 'A-Z') {
        filtered.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        renderPosts(filtered);
    }
    if (e.target.value === 'Z-A') {
        filtered.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        renderPosts(filtered);
    }
});

filterEl.addEventListener('keyup', () => {
    const value = filterEl.value.toLowerCase();
    filtered = filtered.filter((item) => item.title.toLowerCase().includes(value));
    renderPosts(filtered);
});
