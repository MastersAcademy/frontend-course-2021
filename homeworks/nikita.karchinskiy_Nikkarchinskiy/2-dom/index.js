const ulList = document.querySelector('[data-message-list');
const input = document.querySelector('[data-input');
const messagerWrapper = document.querySelector('[data-wrapper]');
const form = document.querySelector('[data-form]');

function addMessage() {
    const li = `<li class="list-tab">${input.value}</li>`;
    ulList.insertAdjacentHTML('beforeend', li);
    messagerWrapper.scrollTo(this.li);
    input.value = '';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value !== '') {
        addMessage();
    }
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey && input.value !== '') {
        addMessage();
    }
});
