const loderEl = document.querySelector('[data-loared]');
const templateItemsEl = document.querySelector('[data-tamplate-items]');
const holderContentEl = document.querySelector('[data-holder-content]');
const headerSelectEl = document.querySelector('[data-header-select]');

function addElement(content) {
    holderContentEl.textContent = '';
    content.forEach((item) => {
        const itemsEl = templateItemsEl.content.cloneNode(true);
        itemsEl.querySelector('[data-articl-title]').textContent = item.title;
        itemsEl.querySelector('[data-articl-text]').textContent = item.body;
        holderContentEl.append(itemsEl);
    });
}

const add = (ite) => {
    addElement(ite);
    headerSelectEl.addEventListener('change', (evt) => {
        if (evt.target.value === 'sort-A-Z') {
            ite.sort((a, b) => a.title.localeCompare(b.title));
            addElement(ite);
        } else if (evt.target.value === 'sort-Z-A') {
            ite.sort((a, b) => b.title.localeCompare(a.title));
            addElement(ite);
        }
    });
};

function getResponse() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            const info = data.splice(0, 8);
            add(info);
            return info;
        })
        .catch(() => {
            console.log('error');
        });
}

window.addEventListener('load', () => {
    getResponse();
    setTimeout(() => {
        loderEl.classList.add('loading');
    }, 3000);
});
