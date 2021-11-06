const url = 'https://jsonplaceholder.typicode.com/posts';
const blogMsg = document.querySelector('[data-blog-msg]');
const sortPost = document.querySelector('[data-blog-sort]');
const filterPostTitle = document.querySelector('[data-blog-filter]');
let postStr = '';

function forward(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
}

function back(field) {
    return (a, b) => (b[field] > a[field] ? 1 : -1);
}

function render(bTitle, bBody) {
    const msg = document.createElement('ol');
    msg.classList.add('blog-msg');
    blogMsg.appendChild(msg);
    const postTitle = document.createElement('H1');
    postTitle.innerHTML = bTitle;
    postTitle.classList.add('post-title');
    msg.appendChild(postTitle);
    const postBody = document.createElement('p');
    postBody.innerHTML = bBody;
    postBody.classList.add('post-body');
    msg.appendChild(postBody);
}

function deleteEl(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

fetch(url)
    .then((response) => response.json())
    .then((json) => {
        const blogSort = json;
        for (let i = 0; i < blogSort.length; i++) {
            render(`${blogSort[i].title}`, `${blogSort[i].body}`);
        }

        sortPost.addEventListener('click', () => {
            if (`${sortPost.value}` === 'No sort') {
                deleteEl(blogMsg);
                blogSort.sort(forward('id'));
                for (let i = 0; i < blogSort.length; i++) {
                    render(`${blogSort[i].title}`, `${blogSort[i].body}`);
                }
            } else if (`${sortPost.value}` === 'Sort A-Z') {
                deleteEl(blogMsg);
                blogSort.sort(forward('title'));
                for (let i = 0; i < blogSort.length; i++) {
                    render(`${blogSort[i].title}`, `${blogSort[i].body}`);
                }
            } else if (`${sortPost.value}` === 'Sort Z-A') {
                deleteEl(blogMsg);
                blogSort.sort(back('title'));
                for (let i = 0; i < blogSort.length; i++) {
                    render(`${blogSort[i].title}`, `${blogSort[i].body}`);
                }
            }
        });

        filterPostTitle.addEventListener('change', () => {
            deleteEl(blogMsg);
            postStr = filterPostTitle.value;
            const blogFilter = blogSort.filter((el) => {
                return el.title.toLowerCase().indexOf(postStr.toLowerCase()) > -1
            });
            for (let i = 0; i < blogFilter.length; i++) {
                render(`${blogFilter[i].title}`, `${blogFilter[i].body}`);
            }
        });
    });
