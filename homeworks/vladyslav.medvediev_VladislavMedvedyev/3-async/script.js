async function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => data);
}
function sort(sortMethod = 'default') {
    (async () => {
        const posts = await getPosts();
        switch (sortMethod) {
            case ('default'):
            default:
                console.log(posts);
                break;
            case ('a-z'):
                posts.sort((a, b) => {
                    const titleA = a.title.toUpperCase();
                    const titleB = b.title.toUpperCase();
                    if (titleA < titleB) {
                        return -1;
                    }
                    if (titleA > titleB) {
                        return 1;
                    }
                    return 0;
                });
                console.log(posts);
                break;
            case ('z-a'):
                posts.sort((a, b) => {
                    const titleA = a.title.toUpperCase();
                    const titleB = b.title.toUpperCase();
                    if (titleA > titleB) {
                        return -1;
                    }
                    if (titleA < titleB) {
                        return 1;
                    }
                    return 0;
                });
                console.log(posts);
                break;
        }
        const article1TitleEl = document.querySelector('[data-title-1]');
        const article1ContentEl = document.querySelector('[data-p-1]');
        const article2TitleEl = document.querySelector('[data-title-2]');
        const article2ContentEl = document.querySelector('[data-p-2]');
        const article3TitleEl = document.querySelector('[data-title-3]');
        const article3ContentEl = document.querySelector('[data-p-3]');
        const article4TitleEl = document.querySelector('[data-title-4]');
        const article4ContentEl = document.querySelector('[data-p-4]');
        article1TitleEl.textContent = posts[0].title;
        article1ContentEl.textContent = posts[0].body;
        article2TitleEl.textContent = posts[1].title;
        article2ContentEl.textContent = posts[1].body;
        article3TitleEl.textContent = posts[2].title;
        article3ContentEl.textContent = posts[2].body;
        article4TitleEl.textContent = posts[3].title;
        article4ContentEl.textContent = posts[3].body;
    })();
}
setTimeout(sort, 1000);
const sortEl = document.querySelector('[data-sort]');
sortEl.addEventListener('change', function () {
    if (this.value === 'aToZ') {
        setTimeout(() => {
            sort('a-z');
        }, 1000);
    } if (this.value === 'zToA') {
        setTimeout(() => {
            sort('z-a');
        }, 1000);
    } if (this.value === 'initial') {
        setTimeout(sort, 1000);
    }
});
