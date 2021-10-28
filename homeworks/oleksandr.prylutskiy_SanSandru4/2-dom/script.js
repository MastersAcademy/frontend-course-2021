let chat = document.querySelector(".divMessages");
let input = document.querySelector(".inputMessage");
let btnSubmit = document.querySelector(".btnSend");
let cross = document.querySelector(".cls-btn");
let message = "";

btnSubmit.addEventListener("click", () => {
    message = input.value;
    chat.innerHTML += '<div class="msg"><span class="closebtn" onclick="this.parentElement.style.display="none";">&times;</span>' + message + '</div>';
    input.value = '';
    let scr = chat.scrollHeight;
    chat.scrollTop = scr;
});

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13){
        if (event.shiftKey) {
            message = input.value;
            chat.innerHTML += '<div class="msg"><span class="cls-btn">&times;</span>' + message + '</div>';
            input.value = '';
            let scr = chat.scrollHeight;
            chat.scrollTop = scr;
        }
    }
})

cross.addEventListener('click', () => {
    parentNode.style.display = "none";
})