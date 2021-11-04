// Blog section
const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
const blog = document.querySelector('[data-blog]');
const sorting = document.querySelector('[data-sorting]');

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
function createPostsList(content) {
    for (let i = 0; i < content.length; i++) {
        postMarkupPost(content[i].id, content[i].title, content[i].body);
    }
}

const loading = document.createElement('p');
loading.innerText = 'Loading...';
// Rendering posts from JSON and
async function requestPosts(url) {
    blog.appendChild(loading);
    setTimeout(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                const content = response.slice(0, 10);
                createPostsList(content);
                return content;
            }).catch((err) => {
                console.log(err);
            });
        blog.removeChild(loading);
    }, 3000);
}
requestPosts(requestUrl);

async function requestPostsAZ(url) {
    blog.appendChild(loading);
    setTimeout(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                let content = response.slice(0, 10);
                content = content.sort((a, b) => (a.title > b.title ? 1 : -1));
                console.log(content);
                createPostsList(content);
                return content;
            }).catch((err) => {
                console.log(err);
            });
        blog.removeChild(loading);
    }, 3000);
}

async function requestPostsZA(url) {
    blog.appendChild(loading);
    setTimeout(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                let content = response.slice(0, 10);
                content = content.sort((a, b) => (a.title < b.title ? 1 : -1));
                console.log(content);
                createPostsList(content);
                return content;
            }).catch((err) => {
                console.log(err);
            });
        blog.removeChild(loading);
    }, 3000);
}

sorting.addEventListener('change', () => {
    blog.innerHTML = '';
    if (sorting.value === 'A__to__Z') {
        requestPostsAZ(requestUrl);
    } else if (sorting.value === 'Z__to__A') {
        requestPostsZA(requestUrl);
    } else if (sorting.value === 'sort') {
        requestPosts(requestUrl);
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'delete__button') {
        blog.removeChild(e.target.parentElement.parentElement);
    }
});

// filtering.oninput = () => {
//     const val = this.value.trim();
//     const textList = document.querySelectorAll('.post__title');
//     if (val !== '') {
//         textList.forEach((el) => {
//             const arr = el.innerText.split('');
//             if (arr.includes(val) === -1) {
//                 el.parentElement.classList.remove('hide');
//             } else {
//                 el.parentElement.classList.add('hide');
//             }
//         });
//     } else {
//         textList.forEach((el) => {
//             el.classList.remove('hide');
//         });
//     }
// };
