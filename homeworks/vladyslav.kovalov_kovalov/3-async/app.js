import { Post } from './post.js';
import { Notification } from './notification.js';
import { Loader } from './loader.js';

class App {
    constructor(url) {
        this.url = url;
        this.postsContainerEl = document.querySelector('[data-posts-section]');
    }

    async getPosts() {
        const response = await fetch(`${this.url}?_start=0&_end=30`);
        return response.json();
    }

    async deletePost(postId) {
        const path = `${this.url}/${postId}`;
        const response = await fetch(path, {
            method: 'DELETE',
        });
        const posts = await response.json();
        return posts;
    }

    removePost(event) {
        if (event.target.dataset.deleteButtonIcon === '') {
            this.postsContainerEl.removeChild(event.target.closest('[data-post]'));
        }
    }

    sortPosts() {
        const icon = document.querySelector('[data-button-sort-icon]');

        if (icon.classList.contains('fa-sort-amount-up-alt')) {
            icon.classList.replace('fa-sort-amount-up-alt', 'fa-sort-amount-down-alt');
        } else {
            icon.classList.replace('fa-sort-amount-down-alt', 'fa-sort-amount-up-alt');
        }

        [...this.postsContainerEl.children]
            .sort((a, b) => (a > b ? 1 : -1))
            .forEach((element) => this.postsContainerEl.append(element));
    }

    filterPosts(event) {
        const text = event.toLowerCase();
        [...this.postsContainerEl.children].forEach((post) => {
            const element = post.querySelector('[data-post-title]').textContent;
            const currentPost = post;
            if (element.toLowerCase().indexOf(text) !== -1) {
                currentPost.classList.remove('display-none');
            } else {
                currentPost.classList.add('display-none');
            }
        });
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';
const app = new App(url);
const loader = new Loader();
const notification = new Notification();

function initLoader() {
    const loaderElement = loader.create();
    loader.add(loaderElement);
    loader.show();
}

function initNotification(textMessage) {
    const notificationElement = notification.create(textMessage);
    notification.add(notificationElement);
    notification.show();
    setTimeout(() => {
        notification.remove();
    }, 1500);
}

function initContentLoad() {
    initLoader();
    setTimeout(() => {
        app.getPosts().then((data) => {
            data.forEach((postData) => {
                const post = new Post(postData);
                const postElement = post.create();
                post.add(postElement);
            });
        }).catch((error) => console.log(error)).finally(loader.remove());
    }, 3000);
}

initContentLoad();

document.querySelector('[data-button-sort]').addEventListener('click', () => {
    app.sortPosts();
});

document.querySelector('[data-post-filter]').addEventListener('keyup', (event) => {
    const input = document.querySelector('[data-post-filter-control]');
    app.filterPosts(input.value);
    event.preventDefault();
});

document.querySelector('[data-posts-section]').addEventListener('click', (event) => {
    app.removePost(event);

    if (event.target.dataset.deleteButtonIcon === '') {
        initNotification('You have deleted the post!');

        const postId = event.target.closest('[data-post]').dataset;
        app.deletePost(postId)
            .then()
            .catch(() => {
                initNotification('Oops, something went wrong!');
            });
    }
});
