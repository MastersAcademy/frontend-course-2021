const loaderEl = document.querySelector('[data-loader]');
const postsContainerEL = document.querySelector('[data-posts-wrapper]');
const buttonInitialEl = document.querySelector('[data-initial]');
const buttonSortEl = document.querySelector('[data-sort]');
const buttonSortReversEL = document.querySelector('[data-sort-revers]');
const filterEl = document.querySelector('[data-filter]');
const posts = [];
let filterArray = [];

function createPost(postsArray) {
    postsContainerEL.innerHTML = '';
    postsArray.forEach((element) => {
        const postWrapper = document.createElement('div');
        const title = document.createElement('h2');
        const textPost = document.createElement('p');
        title.textContent = element.title;
        title.className = 'posts-container__post__title ';
        textPost.className = 'post-container__post__text';
        textPost.textContent = element.body;
        postWrapper.className = 'posts-container__post ';
        postsContainerEL.append(postWrapper);
        postWrapper.append(title);
        postWrapper.append(textPost);
    });
}

window.addEventListener('load', () => {
    setTimeout(() => {
        async function getPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30');
            const postsResponse = await response.json();
            Array.prototype.push.apply(posts, postsResponse);
            return posts;
        }

        getPosts()
            .then(() => {
                createPost(posts);
            });
        loaderEl.className = 'after-load';
    }, 3000);
});
buttonInitialEl.addEventListener('click', () => {
    createPost(posts);
});

buttonSortEl.addEventListener('click', () => {
    const sortArray = Array.from(posts);
    sortArray.sort((x, y) => x.title.localeCompare(y.title));
    createPost(sortArray);
});

buttonSortReversEL.addEventListener('click', () => {
    const sortArrayRevers = Array.from(posts);
    sortArrayRevers.sort((x, y) => y.title.localeCompare(x.title));
    createPost(sortArrayRevers);
});

function filterPosts(value) {
    filterArray = posts.filter((e) => e.title.includes(value));
}

filterEl.addEventListener('keyup', (event) => {
    filterPosts(event.target.value);
    createPost(filterArray);
    if (event.target.value) {
        buttonSortEl.addEventListener('click', () => {
            filterArray.sort((x, y) => x.title.localeCompare(y.title));
            createPost(filterArray);
        });
        buttonSortReversEL.addEventListener('click', () => {
            filterArray.sort((x, y) => y.title.localeCompare(x.title));
            createPost(filterArray);
        });
    }
});
