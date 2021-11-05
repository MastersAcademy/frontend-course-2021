const chat = document.querySelector('[data-info="chat-out-message"]');
const input = document.querySelector('[data-info="chat-input-message"]');
const btnSub = document.querySelector('[data-rule="button-click"]');
const formChat = document.querySelector('[data-form="chat-control"]');
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

formChat.addEventListener('submit', (event) => {
    event.preventDefault();
    chatMessage();
    chatScroll();
});

btnSub.addEventListener('click', () => {
    chatMessage();
    chatScroll();
});
