import { HTTP } from './http.js';
import { Post } from './post.js';
import { Notification } from './notification.js';
import { Loader } from './loader.js';

class App {
    constructor(http) {
        this.http = http;
        this.postsContainerEl = document.querySelector('[data-posts-section]');
    }

    getPosts() {
        return this.http.getPosts();
    }

    deletePost() {
        return this.http.deletePost();
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
        [...this.postsContainerEl.children].forEach((postEl) => {
            const title = postEl.querySelector('[data-post-title]').textContent;
            const isVisible = title.toLowerCase().includes(text);
            postEl.classList.toggle('display-none', !isVisible);
        });
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts';
const http = new HTTP(url);
const app = new App(http);
const loader = new Loader();
const notification = new Notification();

function initContentLoad() {
    loader.show();
    setTimeout(() => {
        app.getPosts().then((data) => {
            data.forEach((postData) => {
                const post = new Post(postData);
                post.render();
            });
        }).catch((error) => console.log(error)).finally(loader.remove());
    }, 3000);
}

initContentLoad();

document.querySelector('[data-button-sort]').addEventListener('click', () => {
    app.sortPosts();
});

document.querySelector('[data-post-filter]').addEventListener('keyup', (event) => {
    event.preventDefault();
    const input = document.querySelector('[data-post-filter-control]');
    app.filterPosts(input.value);
});

document.querySelector('[data-posts-section]').addEventListener('click', (event) => {
    app.removePost(event);

    if (event.target.dataset.deleteButtonIcon === '') {
        notification.render('You have deleted the post!');

        const postId = event.target.closest('[data-post]').dataset;
        app.deletePost(postId)
            .catch(() => {
                notification.render('Oops, something went wrong!');
            });
    }
});
