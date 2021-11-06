const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
const blog = document.querySelector('[data-blog]');
const sorting = document.querySelector('[data-sorting]');
const filtering = document.querySelector('[data-filter]');
// For loading
const loading = document.createElement('p');
loading.innerText = 'Loading...';
loading.style.color = 'Orange';
loading.style.fontSize = '25px';

// GET
async function getElements(url) {
    const response = await fetch(url);
    const content = await response.json();
    const data = await content.splice(0, 10);
    return data;
}

// POST

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
function createPostsList(posts) {
    posts.forEach((el) => {
        postMarkupPost(el.id, el.title, el.body);
    });
}
// Delete post
function addDeleteSupport() {
    function presentMessege(el) {
        const deleteMessege = document.createElement('div');
        deleteMessege.innerText = `Post: ${el.target.attributes[0].value} deleted`;
        deleteMessege.classList.add('post__delete__outText');
        document.body.appendChild(deleteMessege);
        setTimeout(() => {
            document.body.removeChild(deleteMessege);
        }, 500);
    }
    document.addEventListener('click', (e) => {
        if (e.target.classList[0] === 'delete__button') {
            blog.removeChild(e.target.closest('article'));
            presentMessege(e);
        }
    });
}
// Filtering
function filter() {
    filtering.addEventListener('input', (e) => {
        const val = e.target.value.trim().toLowerCase();
        const textList = document.querySelectorAll('.post__title');
        if (val !== '') {
            textList.forEach((el) => {
                const current = el.innerText.toLowerCase();
                if (current.search(val) === -1) {
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
    });
}
// For Sorting
async function reloadSortedPage() {
    sorting.addEventListener('change', () => {
        const filterVal = filtering.value;
        console.log(filterVal);
        const posts = [];
        const onPageArticle = document.querySelectorAll('[data-post]');
        if (filterVal !== '') {
            const filterArticles = [];
            onPageArticle.forEach((e) => {
                if (e.classList[1] === undefined) {
                    filterArticles.push(e);
                }
            });
            console.log(filterArticles);
            filterArticles.forEach((e) => {
                const obj = {
                    id: e.attributes[0].value,
                    title: e.querySelector('.post__title').innerText,
                    body: e.querySelector('.post__text').innerText,
                };
                posts.push(obj);
            });
        } else {
            onPageArticle.forEach((e) => {
                const obj = {
                    id: e.attributes[0].value,
                    title: e.querySelector('.post__title').innerText,
                    body: e.querySelector('.post__text').innerText,
                };
                posts.push(obj);
            });
        }
        blog.innerHTML = '';
        switch (sorting.value) {
            case 'AtoZ':
                createPostsList(posts.sort((a, b) => (a.title > b.title ? 1 : -1)));
                break;
            case 'ZtoA':
                createPostsList(posts.sort((a, b) => (a.title < b.title ? 1 : -1)));
                break;
            default:
                createPostsList(posts);
        }
    });
}
// Initialization
async function attachHandlers(data) {
    setTimeout(() => {
        blog.removeChild(loading);
        createPostsList(data);
        addDeleteSupport();
        filter();
        reloadSortedPage();
    }, 3000);
}
async function firstInit() {
    blog.appendChild(loading);
    const posts = await getElements(requestUrl);
    attachHandlers(posts);
}

firstInit();
