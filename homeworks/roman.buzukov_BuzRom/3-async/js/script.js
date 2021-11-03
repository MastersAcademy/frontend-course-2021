const containerEl = document.querySelector('[data-container]');
const listEl = document.querySelector('[data-list]');
const templateEl = document.querySelector('[data-post-template]');
const postsEl = [];
let filteredEl = postsEl;
const sortEl = document.querySelector('[data-sort]');
const filterEl = document.querySelector('[data-filter]');

const getRender = (array) => {
    listEl.innerHTML = '';
    array.map((element) => {
        const item = templateEl.content.cloneNode(true);
        item.querySelector('[data-post]').setAttribute('id', `${element.id}`);
        item.querySelector('[data-title]').textContent = element.title;
        item.querySelector('[data-body]').textContent = element.body;
        return listEl.appendChild(item);
    });
};

window.addEventListener('load', () => {
    if (containerEl) {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/?_limit=30')
                .then((response) => response.json())
                .then((data) => {
                    data.forEach((item) => postsEl.push(item));
                    getRender(postsEl);
                });
            containerEl.classList.add('loaded');
        }, 3000);
    }
});

sortEl.addEventListener('change', (e) => {
    if (e.target.value === 'A-Z') {
        filteredEl.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        getRender(filteredEl);
    }
    if (e.target.value === 'Z-A') {
        filteredEl.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        getRender(filteredEl);
    }
});

filterEl.addEventListener('keyup', () => {
    const value = filterEl.value.toLowerCase();
    filteredEl = postsEl.filter((item) => item.title.toLowerCase().includes(value));
    getRender(filteredEl);
});

const deleteElement = (e) => {
    if (e.target.hasAttribute('data-delete')) {
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
                    filteredEl = filteredEl.filter((item) => +post.id !== item.id);
                    post.remove();
                    console.log(filteredEl);
                })
                .catch(() => {
                    alert('Something went wrong');
                    post.setAttribute('style', 'visibility: visible');
                });
            containerEl.classList.add('loaded');
        }, 1000);
    }
};

listEl.addEventListener('click', deleteElement);
