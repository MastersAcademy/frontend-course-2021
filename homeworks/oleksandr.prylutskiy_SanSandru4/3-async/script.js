const url = 'https://jsonplaceholder.typicode.com/posts';
const blogMsgEl = document.querySelector('[data-blog-msg]');
const sortPostEl = document.querySelector('[data-blog-sort]');
const filterPostTitleEl = document.querySelector('[data-blog-filter]');

function forward(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
}

function back(field) {
    return (a, b) => (b[field] > a[field] ? 1 : -1);
}

function render(bTitle, bBody) {
    const templatePost = document.querySelector('[data-template-blok]');
    const cloneTemplate = templatePost.content.cloneNode(true);
    const postTitle = cloneTemplate.querySelector('[data-post-title]');
    const postBody = cloneTemplate.querySelector('[data-post-body]');
    postTitle.textContent = bTitle;
    postBody.textContent = bBody;
    blogMsgEl.appendChild(cloneTemplate);
}

function showerPosts(posts) {
    posts.forEach((post) => {
        const { title, body } = post;
        render(title, body);
    });
}

function cleanPost(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function filterBlog(fBlog, str) {
    return fBlog.filter((el) => el.title.toLowerCase().indexOf(str.toLowerCase()) > -1);
}

fetch(url)
    .then((response) => response.json())
    .then((json) => {
        const blogSort = json;
        showerPosts(blogSort);

        sortPostEl.addEventListener('click', () => {
            if (`${sortPostEl.value}` === 'No sort') {
                cleanPost(blogMsgEl);
                blogSort.sort(forward('id'));
                showerPosts(blogSort);
            } else if (`${sortPostEl.value}` === 'Sort A-Z') {
                cleanPost(blogMsgEl);
                blogSort.sort(forward('title'));
                showerPosts(blogSort);
            } else if (`${sortPostEl.value}` === 'Sort Z-A') {
                cleanPost(blogMsgEl);
                blogSort.sort(back('title'));
                showerPosts(blogSort);
            }
        });

        filterPostTitleEl.addEventListener('change', () => {
            cleanPost(blogMsgEl);
            const postStr = filterPostTitleEl.value;
            const blogFilter = filterBlog(blogSort, postStr);
            showerPosts(blogFilter);
        });
    })
    .catch((error) => (console.error('Error: ', error)));
