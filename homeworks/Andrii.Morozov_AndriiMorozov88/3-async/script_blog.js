const blogContainer = document.querySelector('[data-blog-container]');
let filter = document.querySelector('[data-input-filter]');
filter.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchDataFilter();
    }
})
function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                const blogElement = document.createElement('div');
                blogElement.className = 'blog_container-el';
                blogContainer.append(blogElement);
                blogElement.innerText = data[i].title;
            }
        });
}
function fetchDataA() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (data[i].title < data[j].title) {
                        [data[i], data[j]] = [data[j], data[i]];
                    }
                }
            }
            for (let i = 0; i < data.length; i++) {
                const blogElement = document.createElement('div');
                blogElement.className = 'blog_container-el';
                blogContainer.append(blogElement);
                blogElement.innerText = data[i].title;
            }
        });
}
function fetchDataZ() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (data[i].title > data[j].title) {
                        [data[i], data[j]] = [data[j], data[i]];
                    }
                }
            }
            for (let i = 0; i < data.length; i++) {
                const blogElement = document.createElement('div');
                blogElement.className = 'blog_container-el';
                blogContainer.append(blogElement);
                blogElement.innerText = data[i].title;
            }
        });
}
function fetchDataFilter() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            blogContainer.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                if (data[i].title.indexOf(filter.value) !== -1) {
                    const blogElement = document.createElement('div');
                    blogElement.className = 'blog_container-el';
                    blogContainer.append(blogElement);
                    blogElement.innerText = data[i].title;
                }
            }
            filter.value = '';
        });
}
document.querySelector('[data-btn]').addEventListener('click', () => {
    const sort = document.querySelector('[data-sort]');
    if (sort.value === '1') {
        blogContainer.innerHTML = '';
        setTimeout(fetchData, 100);
    }
    if (sort.value === '2') {
        blogContainer.innerHTML = '';
        setTimeout(fetchDataA, 100);
    }
    if (sort.value === '3') {
        blogContainer.innerHTML = '';
        setTimeout(fetchDataZ, 100);
    }
});
