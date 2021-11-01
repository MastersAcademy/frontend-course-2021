const chat = document.querySelector('[data-info="chat-out-message"]');
const input = document.querySelector('[data-info="chat-input-message"]');
const btnSub = document.querySelector('[data-rule="button-click"]');
let message = '';

function chatMessage() {
    message = input.value;
    chat.innerHTML += `<div class="message-box">${message}</div>`;
    input.value = '';
}

function chatScroll() {
    const scr = chat.scrollHeight;
    chat.scrollTop = scr;
}

btnSub.addEventListener('click', () => {
    chatMessage();
    chatScroll();
});

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        chatMessage();
        chatScroll();
    }
});
