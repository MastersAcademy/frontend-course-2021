// async function getPosts() {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((response) => response.json());
// }
// // Функция-фильтр
// const inputEl = document.querySelector('[data-input]');
// console.log(inputEl);
// const formEl = document.querySelector('[data-form]');
// formEl.addEventListener('submit', async () => {
//     console.log(inputEl.value);
//     const posts = await getPosts();
//     const postsFiltring = posts.filter((element) => element.title.includes(inputEl.value));
//     console.log(postsFiltring);
// });
// function blockDefault(event) {
//     event.preventDefault();
// }
// formEl.addEventListener('submit', blockDefault);
// // Код без фильтра
// function sort(sortMethod = 'default') {
//     (async () => {
//         const posts = await getPosts();
//         switch (sortMethod) {
//             case ('default'):
//             default:
//                 // console.log(posts);
//                 break;
//             case ('a-z'):
//                 posts.sort((a, b) => {
//                     const titleA = a.title.toUpperCase();
//                     const titleB = b.title.toUpperCase();
//                     if (titleA < titleB) {
//                         return -1;
//                     }
//                     if (titleA > titleB) {
//                         return 1;
//                     }
//                     return 0;
//                 });
//                 // console.log(posts);
//                 break;
//             case ('z-a'):
//                 posts.sort((a, b) => {
//                     const titleA = a.title.toUpperCase();
//                     const titleB = b.title.toUpperCase();
//                     if (titleA > titleB) {
//                         return -1;
//                     }
//                     if (titleA < titleB) {
//                         return 1;
//                     }
//                     return 0;
//                 });
//                 // console.log(posts);
//                 break;
//         }
//         const article1TitleEl = document.querySelector('[data-title-1]');
//         const article1ContentEl = document.querySelector('[data-p-1]');
//         const article2TitleEl = document.querySelector('[data-title-2]');
//         const article2ContentEl = document.querySelector('[data-p-2]');
//         const article3TitleEl = document.querySelector('[data-title-3]');
//         const article3ContentEl = document.querySelector('[data-p-3]');
//         const article4TitleEl = document.querySelector('[data-title-4]');
//         const article4ContentEl = document.querySelector('[data-p-4]');
//         article1TitleEl.textContent = posts[0].title;
//         article1ContentEl.textContent = posts[0].body;
//         article2TitleEl.textContent = posts[1].title;
//         article2ContentEl.textContent = posts[1].body;
//         article3TitleEl.textContent = posts[2].title;
//         article3ContentEl.textContent = posts[2].body;
//         article4TitleEl.textContent = posts[3].title;
//         article4ContentEl.textContent = posts[3].body;
//     })();
// }
// setTimeout(sort, 1);
// sortEl.addEventListener('change', function () {
//     if (this.value === 'aToZ') {
//         setTimeout(() => {
//             sort('a-z');
//         }, 1);
//     } if (this.value === 'zToA') {
//         setTimeout(() => {
//             sort('z-a');
//         }, 1);
//     } if (this.value === 'initial') {
//         setTimeout(() => {
//             sort();
//         }, 1);
//     }
// });
const sortEl = document.querySelector('[data-sort]');
new Promise((resolve) => {
    setTimeout(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        resolve(data);
    }, 3000);
}).then((posts) => {
    console.log(posts);
    const inputEl = document.querySelector('[data-input]');
    const formEl = document.querySelector('[data-form]');
    formEl.addEventListener('submit', () => {
        const postsFiltring = posts.filter((element) => element.title.includes(inputEl.value));
        console.log(postsFiltring);
    });
    function blockDefault(event) {
        event.preventDefault();
    }
    formEl.addEventListener('submit', blockDefault);
    return posts;
}).then((posts) => {
    function sort(sortMethod = 'default') {
        switch (sortMethod) {
            case ('default'):
            default:
                console.log(posts);
                break;
            case ('a-z'):
                posts.sort((a, b) => {
                    const titleA = a.title.toUpperCase(); // Можно удалить переменные?
                    const titleB = b.title.toUpperCase();
                    if (titleA < titleB) { // Просто подставить a.title < b.title
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
    }
    sort();
    sortEl.addEventListener('change', function () {
        if (this.value === 'aToZ') {
            setTimeout(() => {
                sort('a-z');
            }, 1);
        } if (this.value === 'zToA') {
            setTimeout(() => {
                sort('z-a');
            }, 1);
        } if (this.value === 'initial') { // Не работает!
            setTimeout(() => {
                sort();
                console.log('inital');
            }, 1);
        }
    });
}).finally(() => {
    const preloader = document.querySelector('[data-preloader]');
    preloader.classList.add('hide-preloader');
    setInterval(() => {
        preloader.classList.add('preloader-hidden');
    }, 990);
});
