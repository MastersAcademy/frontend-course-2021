const postArea = document.querySelector('[data-content]');
const sortDesc = document.querySelector('[data-sort-descending]');
const sortAsc = document.querySelector('[data-sort-ascending]');
const sortInitial = document.querySelector('[data-sort-initial]');
const filterData = document.querySelector('[data-filter]');

window.addEventListener('load', () => {
    setTimeout(() => {
        async function loadPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=21');
            const posts = await response.json();
            return posts;
        }

        function renderPosts(posts) {
            postArea.innerHTML = '';
            for (let i = 0; i < posts.length; i++) {
                const post = document.createElement('div');
                post.classList.add('blog__content-post');
                const title = document.createElement('h2');
                title.textContent = posts[i].title.toUpperCase();
                title.classList.add('blog__content-post-title');
                const text = document.createElement('p');
                text.textContent = posts[i].body;
                text.classList.add('blog__content-post-text');
                post.append(title);
                post.append(text);
                postArea.append(post);
            }
        }

        loadPosts().then((posts) => {
            renderPosts(posts);

            sortInitial.addEventListener('click', () => {
                renderPosts(posts);
            });

            sortDesc.addEventListener('click', () => {
                posts.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
                renderPosts(posts);
            });

            sortAsc.addEventListener('click', () => {
                posts.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
                renderPosts(posts);
            });

            filterData.addEventListener('input', () => {
                posts.filter((item) => item.title.toLowerCase()
                    .includes(filterData.value.toLowerCase()));
                renderPosts(posts);
            });
        });

        document.querySelector('.loading').style.display = 'none';
    }, 3000);
});
