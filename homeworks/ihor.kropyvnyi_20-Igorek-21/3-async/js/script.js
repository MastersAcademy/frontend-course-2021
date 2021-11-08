const loaderEl = document.querySelector('[data-loared]');
const templateItemsEl = document.querySelector('[data-tamplate-items]');
const holderContentEl = document.querySelector('[data-holder-content]');
const headerSelectEl = document.querySelector('[data-header-select]');
const headerInputEl = document.querySelector('[data-header-input]');

function addElement(content) {
    holderContentEl.textContent = '';
    content.forEach((copy) => {
        const itemsEl = templateItemsEl.content.cloneNode(true);
        itemsEl.querySelector('[data-articl-title]').textContent = copy.title;
        itemsEl.querySelector('[data-articl-text]').textContent = copy.body;
        holderContentEl.append(itemsEl);
    });
}

const sortTitle = (post) => {
    addElement(post);
    headerSelectEl.addEventListener('change', (event) => {
        if (event.target.value === 'without-sort') {
            post.sort((a, b) => a.id - (b.id));
            addElement(post);
        } else if (event.target.value === 'sort-A-Z') {
            post.sort((a, b) => a.title.localeCompare(b.title));
            addElement(post);
        } else {
            post.sort((a, b) => b.title.localeCompare(a.title));
            addElement(post);
        }
    });
    headerInputEl.addEventListener('input', () => {
        const filteredText = post.filter((a) => a.title.includes(headerInputEl.value));
        addElement(filteredText);
    });
};

const loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            const info = data.splice(0, 30);
            sortTitle(info);
            return info;
        })
        .catch(() => {
            alert('Page not found');
        });
};

window.addEventListener('load', () => {
    loadPosts();
    setTimeout(() => {
        loaderEl.classList.add('loading');
    }, 3000);
});
