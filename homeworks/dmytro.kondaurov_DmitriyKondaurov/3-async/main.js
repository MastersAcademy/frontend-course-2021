const fieldForPosts = document.body.querySelector('[data-main-box]');
let listOfPosts = [];
const postFilter = document.body.querySelector('[data-filter]');
const postSort = document.body.querySelector('[data-sort]');

const hideLoaderGifImage = () => {
    document.querySelector('[data-main-content-loader]').classList.add('hide');
};

const addPost = (title, text) => {
    const newEl = document.createElement('li');
    const newElCloseBtn = document.createElement('div');
    const newElCloseBtnLink = document.createElement('a');
    const newElCloseBtnImg = document.createElement('img');
    const newElTitle = document.createElement('h2');
    const newElText = document.createElement('p');
    newEl.classList.add('post-list__item');
    newElTitle.classList.add('post-list__item-title');
    newElTitle.setAttribute('data-post-title', '');
    newElText.classList.add('post-list__item-text');
    newElText.setAttribute('data-post-text', '');
    newElCloseBtn.classList.add('trash-bnt');
    newElCloseBtnLink.classList.add('trash-btn__link');
    newElCloseBtnImg.classList.add('trash-btn__icon');
    newElCloseBtnLink.href = '#';
    newElCloseBtnImg.src = 'Trash-Icon.png';
    newElCloseBtnImg.alt = 'Trash';
    newElCloseBtnImg.width = 66;
    newElCloseBtnImg.height = 42;
    newElText.textContent = text;
    newElTitle.textContent = title;
    newElCloseBtn.append(newElCloseBtnLink);
    newElCloseBtnLink.append(newElCloseBtnImg);
    newEl.append(newElTitle, newElText, newElCloseBtn);
    fieldForPosts.append(newEl);
};

const filterEl = (post) => post.firstElementChild.textContent.localeCompare(postFilter.value) === 1;
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
            })
            .then(hideLoaderGifImage);
    }, 3000);
};

getPosts();
