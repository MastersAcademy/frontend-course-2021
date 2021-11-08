let currentPosts = [];
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/';
const MESSAGE_SUCCESS = 'Message deleted successfully';
const input = document.querySelector('[data-input]');
const sortSwitcher = document.querySelector('[data-sort]');
const postsWindow = document.querySelector('[data-posts]');
const loader = document.querySelector('[data-loader');

const renderPosts = (posts = currentPosts) => {
    postsWindow.innerHTML = '';
    posts.forEach((post) => {
        const { id, title, body } = post;
        const newPost = document.createElement('div');
        newPost.classList.add('new-post');
        const postTitle = document.createElement('h2');
        postTitle.classList.add('new-post__title');
        postTitle.innerHTML = title;
        const postBody = document.createElement('span');
        postBody.classList.add('new-post__body');
        postBody.innerHTML = body;
        const delButton = document.createElement('button');
        delButton.classList.add('del-button');
        delButton.setAttribute('data-del-post', id);
        delButton.innerHTML = 'X';
        postsWindow.appendChild(newPost);
        newPost.appendChild(postTitle);
        newPost.appendChild(postBody);
        newPost.appendChild(delButton);
    });
};

const _sort = (filter, trueStr, falseStr) => {
    const sorted = filter.sort((a, b) => (a.title > b.title ? trueStr : falseStr));
    return sorted;
};

const sortPosts = (filter) => {
    if (sortSwitcher.value === 'sortedAZ') return _sort(filter, 1, -1);
    if (sortSwitcher.value === 'sortedZA') return _sort(filter, -1, 1);
    return filter;
};

const filterPosts = () => {
    const reg = new RegExp(input.value);
    const sortResult = currentPosts.filter(({ title }) => reg.test(title));
    return sortPosts(sortResult);
};

const filterCallback = () => {
    const filtered = filterPosts();
    renderPosts(filtered);
};

const statusMessage = (statement) => {
    const message = document.createElement('div');
    message.classList.add('status-message');
    message.innerHTML = statement;
    postsWindow.appendChild(message);
    if (statement === MESSAGE_SUCCESS) {
        message.style.backgroundColor = '#00A300';
    } else {
        message.style.backgroundColor = '#C00';
    }
    setTimeout(() => (postsWindow.removeChild(message)), 300);
};

const deletePost = (delMessage) => {
    const postId = +delMessage.dataset.delPost;
    const message = delMessage;
    if (delMessage.textContent === 'X') {
        message.parentNode.style.filter = 'blur(3px)';
        postsWindow.appendChild(loader);
    }
    fetch(`${BASE_URL}${postId}`, { method: 'DELETE' })
        .then(() => {
            if (delMessage.textContent === 'X') {
                delMessage.parentNode.remove();
                currentPosts = currentPosts
                    .filter((currentPost) => currentPost.id !== postId);
                postsWindow.removeChild(loader);
                statusMessage('Message sucvessfuly delete');
                return currentPosts;
            }
            return currentPosts;
        })
        .catch((error) => {
            message.parentNode.style.filter = 'none';
            statusMessage(error);
        });
};

sortSwitcher.addEventListener('change', filterCallback);

input.addEventListener('input', filterCallback);

postsWindow.addEventListener('click', (event) => {
    const delMessage = event.target;
    deletePost(delMessage);
});

document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
    const fetchPromise = fetch(`${BASE_URL}`);
    fetchPromise.then((response) => response.json())
        .then((json) => {
            currentPosts = json;
            renderPosts();
        })
        .catch((error) => console.log(error));
}, 3000));
