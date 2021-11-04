async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
        const postsJson = await response.json();
        const newArray = [postsJson[0], postsJson[1], postsJson[2], postsJson[3]];
        // const postsData = JSON.parse(postsJson);
        const article1TitleEl = document.querySelector('[data-title-1]');
        const article1ContentEl = document.querySelector('[data-p-1]');
        const article2TitleEl = document.querySelector('[data-title-2]');
        const article2ContentEl = document.querySelector('[data-p-2]');
        const article3TitleEl = document.querySelector('[data-title-3]');
        const article3ContentEl = document.querySelector('[data-p-3]');
        const article4TitleEl = document.querySelector('[data-title-4]');
        const article4ContentEl = document.querySelector('[data-p-4]');
        article1TitleEl.textContent = newArray[0].title;
        article1ContentEl.textContent = newArray[0].body;
        article2TitleEl.textContent = newArray[1].title;
        article2ContentEl.textContent = newArray[1].body;
        article3TitleEl.textContent = newArray[2].title;
        article3ContentEl.textContent = newArray[2].body;
        article4TitleEl.textContent = newArray[3].title;
        article4ContentEl.textContent = newArray[3].body;
        console.log(newArray);
    } else {
        alert('error', response.status);
    }
}
getPosts();
async function getPosts1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
        const postsJson = await response.json();
        const newArray = [postsJson[0], postsJson[1], postsJson[2], postsJson[3]];
        // const postsData = JSON.parse(postsJson);
        const article1TitleEl = document.querySelector('[data-title-1]');
        const article1ContentEl = document.querySelector('[data-p-1]');
        const article2TitleEl = document.querySelector('[data-title-2]');
        const article2ContentEl = document.querySelector('[data-p-2]');
        const article3TitleEl = document.querySelector('[data-title-3]');
        const article3ContentEl = document.querySelector('[data-p-3]');
        const article4TitleEl = document.querySelector('[data-title-4]');
        const article4ContentEl = document.querySelector('[data-p-4]');
        newArray.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        article1TitleEl.textContent = newArray[0].title;
        article1ContentEl.textContent = newArray[0].body;
        article2TitleEl.textContent = newArray[1].title;
        article2ContentEl.textContent = newArray[1].body;
        article3TitleEl.textContent = newArray[2].title;
        article3ContentEl.textContent = newArray[2].body;
        article4TitleEl.textContent = newArray[3].title;
        article4ContentEl.textContent = newArray[3].body;
        console.log(newArray);
    } else {
        alert('error', response.status);
    }
}
const radio = document.querySelector('[data-button]');
radio.addEventListener('click', getPosts1);
