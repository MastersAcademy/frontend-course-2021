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
    const msg = document.createElement('ol');
    msg.classList.add('blog_msg');
    blogMsgEl.appendChild(msg);
    const postTitle = document.createElement('H1');
    postTitle.innerHTML = bTitle;
    postTitle.classList.add('post_title');
    msg.appendChild(postTitle);
    const postBody = document.createElement('p');
    postBody.innerHTML = bBody;
    postBody.classList.add('post_body');
    msg.appendChild(postBody);
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
        for (let i = 0; i < blogSort.length; i++) {
            render(`${blogSort[i].title}`, `${blogSort[i].body}`);
        }

        sortPostEl.addEventListener('click', () => {
            if (`${sortPostEl.value}` === 'No sort') {
                cleanPost(blogMsgEl);
                blogSort.sort(forward('id'));
                for (let i = 0; i < blogSort.length; i++) {
                    render(`${blogSort[i].title}`, `${blogSort[i].body}`);
                }
            } else if (`${sortPostEl.value}` === 'Sort A-Z') {
                cleanPost(blogMsgEl);
                blogSort.sort(forward('title'));
                for (let i = 0; i < blogSort.length; i++) {
                    render(`${blogSort[i].title}`, `${blogSort[i].body}`);
                }
            } else if (`${sortPostEl.value}` === 'Sort Z-A') {
                cleanPost(blogMsgEl);
                blogSort.sort(back('title'));
                for (let i = 0; i < blogSort.length; i++) {
                    render(`${blogSort[i].title}`, `${blogSort[i].body}`);
                }
            }
        });

        filterPostTitleEl.addEventListener('change', () => {
            cleanPost(blogMsgEl);
            const postStr = filterPostTitleEl.value;
            const blogFilter = filterBlog(blogSort, postStr);
            for (let i = 0; i < blogFilter.length; i++) {
                render(`${blogFilter[i].title}`, `${blogFilter[i].body}`);
            }
        });
    });
