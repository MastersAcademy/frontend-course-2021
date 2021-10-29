let chat = document.querySelector(".divMessages");
let input = document.querySelector(".inputMessage");
let btnSubmit = document.querySelector(".btnSend");
// let cross = document.querySelector(".cls-btn");
// console.log(cross);
let message = "";

btnSubmit.addEventListener("click", () => {
    message = input.value;
    chat.innerHTML += '<div class="msg">' + message + '</div>';
    input.value = '';
    let scr = chat.scrollHeight;
    chat.scrollTop = scr;
});

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13){
            message = input.value;
            chat.innerHTML += '<div class="msg">' + message + '</div>';
            input.value = '';
            let scr = chat.scrollHeight;
            chat.scrollTop = scr;
    }
})