const ulList = document.querySelector('[data-list]');
const selectFiltr = document.querySelector('[data-filter-wrapper]');
// const optAlfavit = document.querySelector('[data-filter-alfavit]');
// const optRevAlfavit = document.querySelector('[data-filter-rev-alfavit]');
const inputFiltr = document.querySelector('[data-filtr-text]');
const postArr = [];
let timeOut;

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
    timeOut = setTimeout(() => {
        const searchValue = event.target.value.toLowerCase();
        const resultSearch = postArr.filter((post) => {
            const lowerPostTitle = post.title.toLowerCase();
            return lowerPostTitle.includes(searchValue);
        });
        if (resultSearch !== []) {
            ulList.innerHTML = '';
            resultSearch.forEach((current) => createMessage(current.title, current.body));
        } else {
            ulList.innerHTML = '';
            ulList.innerHTML = '<li class="tab-error"><p class="tab-error-text">No matches found</p></li>';
        }
    }, 750);
});

selectFiltr.addEventListener('change', (event) => {
    ulList.innerHTML = '';
    if (event.target.value === 'From A to Z') {
        const postArrAlf = postArr.sort((a, b) => a.title.toLowerCase()
            .localeCompare(b.title.toLowerCase()));
        postArrAlf.forEach((current) => createMessage(current.title, current.body));
    } else if (event.target.value === 'From Z to A') {
        const postArrRevAlf = postArr.sort((a, b) => b.title.toLowerCase()
            .localeCompare(a.title.toLowerCase()));
        postArrRevAlf.map((current) => createMessage(current.title, current.body));
    } else {
        getPosts();
    }
});

// function filterAlf() => {
//     ulList.innerHTML = '';
//     const filteredArr = postArr.sort();
//     filteredArr.forEach(current => createMessage(current.title, current.body))
// }

// selectFiltr.addEventListener('click', (event) => {
//     if (event.target.value === 'From A to Z') {

//     }
// });
