import { HTTP } from './http.js';

class App {
    constructor() {
        this.postTemplateEl = document.querySelector('[data-post-template]');
        this.loaderTemplateEl = document.querySelector('[data-loader-template]');
        this.postsContainerEl = document.querySelector('[data-posts-section]');
        this.notificationMessageTemplateEl = document.querySelector('[data-notification-message-template]');
    }

    createPostElement(data) {
        const element = this.postTemplateEl.content.cloneNode(true);

        const title = data.body.charAt(0).toUpperCase() + data.body.slice(1);
        const body = data.body.charAt(0).toUpperCase() + data.body.slice(1);
        const { id } = data;

        element.querySelector('[data-post-title]').textContent = title;
        element.querySelector('[data-post-body]').textContent = body;
        element.querySelector('[data-post]').dataset.id = id;
        return element;
    }

    addPost(postElement) {
        this.postsContainerEl.appendChild(postElement);
    }

    removePost(event) {
        if (event.target.dataset.deleteButtonIcon === '') {
            this.postsContainerEl.removeChild(event.target.closest('[data-post]'));
        }
    }

    createLoaderElement() {
        const content = this.loaderTemplateEl.content.cloneNode(true);
        const element = content.querySelector('[data-loader]');
        return element;
    }

    toggleLoader() {
        const element = this.createLoaderElement();

        const loader = document.querySelector('[data-loader]');

        if (!this.postsContainerEl.contains(loader)) {
            this.postsContainerEl.appendChild(element);
        } else {
            this.postsContainerEl.removeChild(loader);
        }
    }

    createNotificationMessageElement() {
        const content = this.notificationMessageTemplateEl.content.cloneNode(true);
        const element = content.querySelector('[data-notification-message]');
        return element;
    }

    toggleNotificatonMessage(textMessage) {
        const element = this.createNotificationMessageElement();
        element.querySelector('[data-notification-message-body]').textContent = textMessage;
        this.postsContainerEl.prepend(element);
        setTimeout(() => {
            this.postsContainerEl.removeChild(document.querySelector('[data-notification-message]'));
        }, 2000);
    }

    sortPosts() {
        const icon = document.querySelector('[data-button-sort-icon]');

        if (icon.classList.contains('fa-sort-amount-up-alt')) {
            icon.classList.replace('fa-sort-amount-up-alt', 'fa-sort-amount-down-alt');
        } else {
            icon.classList.replace('fa-sort-amount-down-alt', 'fa-sort-amount-up-alt');
        }
        [...this.postsContainerEl.children].reverse()
            .forEach((element) => this.postsContainerEl.appendChild(element));
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
const http = new HTTP(url);
const app = new App();

window.addEventListener('DOMContentLoaded', () => {
    app.toggleLoader();
    setTimeout(() => {
        http.getPosts().then((data) => {
            data.forEach((post) => {
                const postElement = app.createPostElement(post);
                app.addPost(postElement);
            });
        }).catch((error) => console.log(error)).finally(app.toggleLoader());
    }, 3000);
});

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
        const postId = event.target.closest('[data-post]').dataset;
        http.deletePost(postId)
            .then(app.toggleNotificatonMessage('Post was deleted'))
            .catch(() => app.toggleNotificatonMessage('Something went wrong!'));
    }
});
