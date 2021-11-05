const mainEl = document.querySelector('[data-main]');
const sortBy = document.querySelector('[data-sorting]');
const filtering = document.querySelector('[data-filter]');
const arrayOfPostObjects = [];
const postsDrawing = (object) => {
    for (let i = 0; i < 25; i++) {
        const divForPost = document.createElement('div');
        divForPost.classList.add('post-style', `post-num-${object[i].id}`);
        mainEl.appendChild(divForPost);
        const postContent = document.createElement('p');
        const postTitle = document.createElement('h3');
        divForPost.appendChild(postTitle);
        divForPost.appendChild(postContent);
        postTitle.textContent = object[i].title;
        postTitle.className = 'post-title';
        postContent.textContent = object[i].body;
        postContent.className = 'post-content';

        const postObject = {};
        postObject.id = object[i].id;
        postObject.body = postContent.textContent;
        postObject.title = postTitle.textContent;
        arrayOfPostObjects.push(postObject);
    }
};
const clearingPage = () => {
    let childToRemove = mainEl.lastChild;
    while (childToRemove) {
        mainEl.removeChild(childToRemove);
        childToRemove = mainEl.lastChild;
    }
};

const requestPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            console.log(json[0]);
            const iframeEl = document.querySelector('.loading-gif-wrapper');
            mainEl.removeChild(iframeEl);

            postsDrawing(json);
        });
};

const whileLoading = () => {
    const loadingGif = document.createElement('iframe');
    loadingGif.src = 'https://giphy.com/embed/sr8jYZVVsCmxddga8w';
    loadingGif.classList.add('loading');
    const loadingGifWrapper = document.createElement('div');
    loadingGifWrapper.classList.add('loading-gif-wrapper');
    loadingGifWrapper.appendChild(loadingGif);
    mainEl.appendChild(loadingGifWrapper);
};

setTimeout(requestPosts, 3000);
whileLoading();

filtering.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        for (let i = 0; i < arrayOfPostObjects.length; i++) {
            if (arrayOfPostObjects[i]
                .title
                .toLowerCase()
                .includes(filtering.value.toLowerCase()) === false) {
                const postToRemove = document.querySelector(`.post-num-${i + 1}`);
                mainEl.removeChild(postToRemove);
            }
        }
    }
});

sortBy.addEventListener('change', (e) => {
    e.preventDefault();
    if (e.target.value === 'A-Z') {
        arrayOfPostObjects.sort((a, b) => a.title.localeCompare(b.title));

        clearingPage();
        postsDrawing(arrayOfPostObjects);
    } else if (e.target.value === 'Z-A') {
        arrayOfPostObjects.sort((a, b) => b.title.localeCompare(a.title));

        clearingPage();
        postsDrawing(arrayOfPostObjects);
    }
});
