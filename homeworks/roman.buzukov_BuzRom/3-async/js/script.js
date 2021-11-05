const containerEl = document.querySelector('[data-container]');
const listEl = document.querySelector('[data-list]');
const templateEl = document.querySelector('[data-post-template]');
const sortEl = document.querySelector('[data-sort]');
const filterEl = document.querySelector('[data-filter]');
const removeBtn = document.getElementsByClassName('post__delete');
const data = [];
let posts = data;

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
                    posts = posts.filter((item) => +post.id !== item.id);
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

const addDeleteListener = (deleteEl) => {
    Array.from(deleteEl).forEach((item) => {
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
        listEl.appendChild(item);
        return addDeleteListener(removeBtn);
    });
};

window.addEventListener('load', () => {
    if (containerEl) {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/?_limit=30')
                .then((response) => response.json())
                .then((res) => {
                    res.forEach((item) => data.push(item));
                    renderPosts(data);
                });
            containerEl.classList.add('loaded');
        }, 3000);
    }
});

const sortFilter = (postsArray, value, type) => {
    let array = postsArray;
    array = array.filter((item) => item.title.toLowerCase().includes(value));
    if (type === 'A-Z') {
        array = array.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        renderPosts(array);
    }
    if (type === 'Z-A') {
        array = array.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        renderPosts(array);
    }
    return renderPosts(array);
};

sortEl.addEventListener('change', (e) => {
    sortFilter(posts, filterEl.value.toLowerCase(), e.target.value);
});

filterEl.addEventListener('keyup', () => {
    sortFilter(posts, filterEl.value.toLowerCase(), sortEl.value);
});
