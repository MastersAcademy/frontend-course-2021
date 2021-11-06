const loderEl = document.querySelector('[data-loared]');
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

const sortTitle = (item) => {
    addElement(item);
    headerSelectEl.addEventListener('change', (evt) => {
        if (evt.target.value === 'without-sort') {
            item.sort((a, b) => a.id - (b.id));
            addElement(item);
        } else if (evt.target.value === 'sort-A-Z') {
            item.sort((a, b) => a.title.localeCompare(b.title));
            addElement(item);
        } else if (evt.target.value === 'sort-Z-A') {
            item.sort((a, b) => b.title.localeCompare(a.title));
            addElement(item);
        }
    });
    headerInputEl.addEventListener('input', () => {
        const filteredText = item.filter((a) => a.title.includes(headerInputEl.value));
        addElement(filteredText);
    });
};

function getResponse() {
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
}

window.addEventListener('load', () => {
    getResponse();
    setTimeout(() => {
        loderEl.classList.add('loading');
    }, 3000);
});
