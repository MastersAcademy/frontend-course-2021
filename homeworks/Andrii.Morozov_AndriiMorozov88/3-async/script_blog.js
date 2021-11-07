const url = 'https://jsonplaceholder.typicode.com/posts';
const blogContainer = document.querySelector('[data-blog-container]');
const sort = document.querySelector('[data-sort]');
const filter = document.querySelector('[data-input-filter]');
async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function noneSorted() {
    const content  = await getData ();
    blogContainer.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog_container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = content[i].title;
    } 
}
async function sortStartA () {
    const content  = await getData ();
    content.sort((a, b) => (a.title < b.title ? -1 : 1));
    blogContainer.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog_container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = content[i].title;
    }
}
async function sortStartZ () {
    const content  = await getData ();
    content.sort((a, b) => (a.title > b.title ? -1 : 1));
    blogContainer.innerHTML = '';
    for (let i = 0; i < content.length; i++) {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog_container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = content[i].title;
    }
}
sort.addEventListener('change', (e) => {
    if (sort.value === '0') {
        blogContainer.innerHTML = '';
    }
    if (sort.value === '1') {
        noneSorted();
    }
    if (sort.value === '2') {
        blogContainer.innerHTML = '';
        sortStartA ();
    }
    if (sort.value === '3') {
        blogContainer.innerHTML = '';
        sortStartZ ();;
    }
});

