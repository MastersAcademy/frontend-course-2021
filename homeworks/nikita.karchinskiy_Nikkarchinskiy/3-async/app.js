const ulList = document.querySelector('[data-list]');
const selectFiltr = document.querySelector('[data-filter-wrapper]');
// const optAlfavit = document.querySelector('[data-filter-alfavit]');
// const optRevAlfavit = document.querySelector('[data-filter-rev-alfavit]');
const inputFiltr = document.querySelector('[data-filtr-text]');
const postArr = [];
let timeOut;
console.log(selectFiltr);

function createMessage(dataTitle, dataBody) {
    const li = `<li class="tab"><h2 class="tab-title">${dataTitle}</h2><p class="tab-text">${dataBody}</p></li>`;
    ulList.insertAdjacentHTML('beforeend', li);
}

async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await response.json();
    data.forEach((current) => {
        createMessage(current.title, current.body);
        postArr.push(current);
    });
}

getPosts();

inputFiltr.addEventListener('input', (event) => {
    clearTimeout(timeOut);
    ulList.innerHTML = '';
    timeOut = setTimeout(() => {
        const searchValue = event.target.value.toLowerCase();
        const resultSearch = postArr.filter((post) => {
            const lowerPostTitle = post.title.toLowerCase();
            return lowerPostTitle.includes(searchValue);
        });
        if (resultSearch !== []) {
            resultSearch.forEach((current) => createMessage(current.title, current.body));
        } else {
            ulList.innerHTML = '<li class="tab-error"><h2 class="tab-title"></h2><p class="tab-error-text"></p></li>';
        }
    }, 750);
});
