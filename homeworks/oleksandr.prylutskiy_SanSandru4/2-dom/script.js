const chat = document.querySelector(".divMessages");
const input = document.querySelector(".inputMessage");
const btnSubmit = document.querySelector(".btnSend");
let message = "";

btnSubmit.addEventListener("click", () => {
    message = input.value;
    chat.innerHTML += `${<div class="msg">message</div>}`;
    input.value = '';
    const scr = chat.scrollHeight;
    chat.scrollTop = scr;
});

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13){
        message = input.value;
        chat.innerHTML += `${<div class="msg">message</div>}`;
        input.value = '';
        const scr = chat.scrollHeight;
        chat.scrollTop = scr;
    }
});
