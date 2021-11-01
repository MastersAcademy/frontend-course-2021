const chat = document.querySelector('.messages');
const input = document.querySelector('.input-message');
const btnSub = document.querySelector('.btn-send');
let message = '';

btnSub.addEventListener('click', () => {
    message = input.value;
    chat.innerHTML += `<div class="message-box">${message}</div>`;
    input.value = '';
    const scr = chat.scrollHeight;
    chat.scrollTop = scr;
});

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        message = input.value;
        chat.innerHTML += `<div class="message-box">${message}</div>`;
        input.value = '';
        const scr = chat.scrollHeight;
        chat.scrollTop = scr;
    }
});
