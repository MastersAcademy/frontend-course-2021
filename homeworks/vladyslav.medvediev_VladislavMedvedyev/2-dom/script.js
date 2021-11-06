const sendEl = document.querySelector('[data-send]');
const formEl = document.querySelector('[data-form]');
function sendMessage() {
    const messageEl = document.querySelector('[data-input]').value;
    const mainEl = document.querySelector('[data-main]');
    if (messageEl.length > 0) {
        const dataPostTemplate = document.querySelector('[data-post-template]');
        const postEl = dataPostTemplate.content.cloneNode(true);
        postEl.querySelector('[data-post-p]').textContent = messageEl;
        mainEl.appendChild(postEl);
        document.querySelector('[data-input]').value = '';
    } else {
        alert('Please write your message');
    }
}
function blockDefault(event) {
    event.preventDefault();
}
sendEl.addEventListener('click', sendMessage);
formEl.addEventListener('submit', blockDefault);
formEl.addEventListener('submit', sendMessage);
