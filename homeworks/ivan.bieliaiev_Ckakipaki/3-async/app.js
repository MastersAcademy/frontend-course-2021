// Blog section
const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
const blog = document.querySelector('[data-blog]');
const sorting = document.querySelector('[data-sorting]');
const filtering = document.querySelector('[data-filter]');

// For loading
const loading = document.createElement('p');
loading.innerText = 'Loading...';
loading.style.color = 'Orange';
loading.style.fontSize = '25px';

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

// Filtering
function filter() {
    filtering.oninput = (e) => {
        const val = e.target.value.trim().toLowerCase();
        const textList = document.querySelectorAll('.post__title');
        if (val !== '') {
            textList.forEach((el) => {
                if (el.innerText.toLowerCase().search(val) === -1) {
                    el.parentElement.classList.add('hide');
                } else {
                    el.parentElement.classList.remove('hide');
                }
            });
        } else {
            textList.forEach((elem) => {
                elem.parentElement.classList.remove('hide');
            });
        }
    };
}

// Delete post
function deletePost() {
    document.addEventListener('click', (e) => {
        if (e.target.classList[0] === 'delete__button') {
            const deleteMessege = document.createElement('div');
            deleteMessege.innerText = `Post: ${e.target.attributes[0].value} deleted`;
            deleteMessege.classList.add('post__delete__outText');
            document.body.appendChild(deleteMessege);
            setTimeout(() => {
                blog.removeChild(e.target.parentElement.parentElement);
                document.body.removeChild(deleteMessege);
            }, 800);
        }
    });
}

// For default sorting
async function requestPosts(url) {
    blog.appendChild(loading);
    setTimeout(() => {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                const content = response.slice(0, 10);
                createPostsList(content);
                filter();
                deletePost();
                return content;
            }).catch((err) => {
                console.log(err);
            });
        blog.removeChild(loading);
    }, 3000);
}
requestPosts(requestUrl);

// For sort A to Z
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
                deletePost();
                filter();
                return content;
            }).catch((err) => {
                console.log(err);
            });
        blog.removeChild(loading);
    }, 3000);
}

// For sort Z to A
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
                deletePost();
                filter();
                return content;
            }).catch((err) => {
                console.log(err);
            });
        blog.removeChild(loading);
    }, 3000);
}

// Sorting
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
