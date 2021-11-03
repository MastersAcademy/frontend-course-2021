const container = document.querySelector('[data-container]');
const list = document.querySelector('[data-list]');
const template = document.querySelector('[data-post-template]');
const posts = [];
let filtered = posts;
const sort = document.querySelector('[data-sort]');
const filter = document.querySelector('[data-filter]');

const getRender = (array) => {
    list.innerHTML = '';
    array.map((element) => {
        const postEl = template.content.cloneNode(true);
        postEl.querySelector('[data-post]').setAttribute('id', `${element.id}`);
        postEl.querySelector('[data-title]').textContent = element.title;
        postEl.querySelector('[data-body]').textContent = element.body;
        return list.appendChild(postEl);
    });
};

window.addEventListener('load', () => {
    if (container) {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/?_limit=30')
                .then((response) => response.json())
                .then((data) => {
                    data.forEach((item) => posts.push(item));
                    getRender(posts);
                });
            container.classList.add('loaded');
        }, 3000);
    }
});

sort.addEventListener('change', (e) => {
    if (e.target.value === 'A-Z') {
        filtered.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        getRender(filtered);
    }
    if (e.target.value === 'Z-A') {
        filtered.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        getRender(filtered);
    }
});

filter.addEventListener('keyup', () => {
    filtered = posts.filter((el) => el.title.toLowerCase().includes(filter.value.toLowerCase()));
    getRender(filtered);
});

const deleteElement = (e) => {
    if (e.target.hasAttribute('data-delete')) {
        const post = e.target.closest('[data-post]');
        post.setAttribute('style', 'visibility: hidden');
        container.classList.remove('loaded');
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then(() => {
                    alert('Post deleted');
                    filtered = filtered.filter((item) => +post.id !== item.id);
                    post.remove();
                    console.log(filtered);
                })
                .catch(() => {
                    alert('Something went wrong');
                    post.setAttribute('style', 'visibility: visible');
                });
            container.classList.add('loaded');
        }, 1000);
    }
};

list.addEventListener('click', deleteElement);
