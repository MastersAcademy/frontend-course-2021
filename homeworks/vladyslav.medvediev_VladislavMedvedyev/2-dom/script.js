const send = document.querySelector('.send');
const input = document.querySelector('.input');
function messageSend() {
    const message = document.querySelector('.input').value;
    const createP = document.createElement('p');
    const main = document.querySelector('.main');
    if (message.length === 0) {
        alert('Please write your message');
    } else {
        createP.textContent = message;
        createP.className = 'message';
        main.appendChild(createP);
        document.querySelector('.input').value = '';
    }
}
send.addEventListener('click', messageSend);
input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        messageSend();
    }
});
