let send = document.querySelector(".send");
send.addEventListener ('click', message_send);

let input = document.querySelector(".input");
input.addEventListener ('keyup', function(event) {
    if (event.key === "Enter") {
        message_send()
    }
})


function message_send() {
    let message = document.querySelector(".input").value;
    let create_p = document.createElement('p');
    let main = document.querySelector(".main");
    if (message.length == 0) {
        alert("Please write your message");
    } else {
        create_p.textContent = message;
        create_p.className = "message";
        main.appendChild(create_p);
        document.querySelector(".input").value = "";            
    }    
}