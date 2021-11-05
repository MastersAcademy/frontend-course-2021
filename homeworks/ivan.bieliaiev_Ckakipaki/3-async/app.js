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
    try {
        const response = await fetch(url);
        const content = await response.json();
        const data = await content.splice(0, 10);
        return data;
    } catch (err) {
        alert(err);
    }
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
function createPostsList(content) {
    content.forEach((el) => {
        postMarkupPost(el.id, el.title, el.body);
    });
}
// Delete post
function deletePost() {
    document.addEventListener('click', (e) => {
        const deleteMessege = document.createElement('div');
        if (e.target.classList[0] === 'delete__button') {
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
// Filtering
function filter() {
    filtering.oninput = (e) => {
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
    };
}
// For Sorting
async function reloadChanged() {
    sorting.addEventListener('change', () => {
        const content = [];
        const onPageArticle = document.querySelectorAll('[data-post]');
        const onPageTitle = document.querySelectorAll('.post__title');
        const onPageText = document.querySelectorAll('.post__text');
        for (let i = 0; i < onPageArticle.length; i++) {
            const obj = {
                id: onPageArticle[i].attributes[0].value,
                title: onPageTitle[i].innerText,
                body: onPageText[i].innerHTML,
            };
            content.push(obj);
        }
        blog.innerHTML = '';
        console.log(sorting.value);
        switch (sorting.value) {
            case 'AtoZ':
                createPostsList(content.sort((a, b) => (a.title > b.title ? 1 : -1)));
                break;
            case 'ZtoA':
                createPostsList(content.sort((a, b) => (a.title < b.title ? 1 : -1)));
                break;
            default:
                createPostsList(content);
        }
    });
}
// Initialization
async function init() {
    blog.appendChild(loading);
    setTimeout(() => {
        async function initialization() {
            const content = await getElements(requestUrl);
            await createPostsList(content);
            await deletePost();
            await filter();
            await reloadChanged();
        }
        initialization();
        blog.removeChild(loading);
    }, 3000);
}

init();
