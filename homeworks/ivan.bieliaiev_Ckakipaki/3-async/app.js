// Blog section
const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
const blog = document.querySelector('[data-blog]');
const sorting = document.querySelector('[data-sorting]');
const filtering = document.querySelector('[data-filter]');
const sortDefault = document.querySelector('[data-sorting-def]');
const sortAtoZ = document.querySelector('[data-sorting-AtZ]');
const sortZtoA = document.querySelector('[data-sorting-ZtA]');

// Create markup and inner for post by FUNC createPostsList
function postMarkupPost(id, title, text) {
    const article = document.createElement('article');
    const p = document.createElement('p');
    const h1 = document.createElement('h1');
    const div = document.createElement('div');
    const button = document.createElement('button');
    article.setAttribute('data-post', id);
    article.classList = 'blog__post';
    button.setAttribute('data-delete-post', id);
    button.classList = 'delete__button';
    p.classList = 'post__text';
    h1.classList = 'post__title';
    div.classList = 'post__delete';
    button.textContent = 'delete';
    h1.textContent = title;
    p.textContent = text;
    div.appendChild(button);
    article.appendChild(h1);
    article.appendChild(p);
    article.appendChild(div);
    blog.appendChild(article);
}

// Appending posts to blog container by FUNC postMarkupPost
function createPostsList(content, blog) {
    for (let i = 0; i < content.length; i++) {
        postMarkupPost(content[i].id, content[i].title, content[i].body);
    }
}

// Rendering posts from JSON and
async function requestPosts(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((response) => {
            const content = response.slice(0, 10);
            createPostsList(content);
            return content
        }).catch((err) => {
            console.log(err)
        })
}
requestPosts(requestUrl)

async function requestPostsAZ(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((response) => {
            let content = response.slice(0, 10);
            content = content.sort((a, b) => a.title > b.title ? 1 : -1);
            console.log(content)
            createPostsList(content);
            return content
        }).catch((err) => {
            console.log(err)
        })
}

async function requestPostsZA(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        }).then((response) => {
            let content = response.slice(0, 10);
            content = content.sort((a, b) => a.title < b.title ? 1 : -1);
            console.log(content)
            createPostsList(content);
            return content
        }).catch((err) => {
            console.log(err)
        })
}

sorting.addEventListener('change', () => {
    blog.innerHTML = ''
    if(sorting.value === 'A__to__Z') {
        requestPostsAZ(requestUrl)
    } else if(sorting.value === 'Z__to__A') {
        requestPostsZA(requestUrl)
    } else if(sorting.value === 'sort'){
        requestPosts(requestUrl);
    }
})
