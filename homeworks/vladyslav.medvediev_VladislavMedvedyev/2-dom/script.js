const sendEl = document.querySelector('[data-send]');
const formEl = document.querySelector('[data-form]');
function sendMessage() {
    const messageEl = document.querySelector('[data-input]').value;
    const createP = document.createElement('p');
    const mainEl = document.querySelector('[data-main]');
    if (messageEl.length > 0) {
        createP.textContent = messageEl;
        createP.className = 'message';
        mainEl.appendChild(createP);
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
