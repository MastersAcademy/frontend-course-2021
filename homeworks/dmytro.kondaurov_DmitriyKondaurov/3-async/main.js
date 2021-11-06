const fieldForPosts = document.body.querySelector('[data-main-box]');
let listOfPosts = [];
const postFilter = document.body.querySelector('[data-filter]');
const postSort = document.body.querySelector('[data-sort]');
let template = document.querySelector('[data-post-template]');

const hideLoaderGifImage = () => {
    document.querySelector('[data-main-content-loader]').classList.add('hide');
};

const addPost = (title, text) => {
    const newEl = template.content.querySelector('[data-post-item]');
    const cloneNewEl = newEl.cloneNode(true);
    cloneNewEl.querySelector('[data-post-text]').textContent = text;
    cloneNewEl.querySelector('[data-post-title]').textContent = title;
    fieldForPosts.append(cloneNewEl);
};

const filterEl = (post) => post.querySelector('[data-post-title]').textContent.localeCompare(postFilter.value) === 1;
const sortElForward = (a, b) => {
    const aTitle = a.querySelector('[data-post-title]').textContent.toUpperCase();
    const bTitle = b.querySelector('[data-post-title]').textContent.toUpperCase();
    if (aTitle < bTitle) {
        return -1;
    }
    if (aTitle > bTitle) {
        return 1;
    }
    return 0;
};

const sortElReverse = (a, b) => {
    const aTitle = a.querySelector('[data-post-title]').textContent.toUpperCase();
    const bTitle = b.querySelector('[data-post-title]').textContent.toUpperCase();
    if (aTitle < bTitle) {
        return 1;
    }
    if (aTitle > bTitle) {
        return -1;
    }
    return 0;
};

const reRenderPosts = () => {
    fieldForPosts.innerHTML = '';
    listOfPosts
        .filter(filterEl)
        .sort((a, b) => {
            if (postSort.value === 'a-z') {
                return sortElForward(a, b);
            } if (postSort.value === 'z-a') {
                return sortElReverse(a, b);
            } return 0;
        })
        .forEach((element) => {
            const postTitle = element.querySelector('[data-post-title]').textContent;
            const postText = element.querySelector('[data-post-text]').textContent;
            addPost(postTitle, postText);
        });
};

postFilter.addEventListener('change', reRenderPosts);
postSort.addEventListener('change', reRenderPosts);

const getPosts = () => {
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => {
                json.map((post) => addPost(post.title, post.body));
            })
            .then(() => {
                listOfPosts = Array.from(document.body.querySelector('[data-main-box]').children);
                listOfPosts.shift();
                template = document.querySelector('[data-post-template]');
            })
            .then(hideLoaderGifImage);
    }, 3000);
};

getPosts();
