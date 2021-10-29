const send = document.querySelector('[data-button-send]');
const tweets = document.querySelector('[data-tweets]');
const inputArea = document.querySelector('[data-message]');

//  DATE AND TIME
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const hh = String(today.getHours()).padStart(2, '0');
const mn = String(today.getMinutes()).padStart(2, '0');

today = `${mm}.${dd}.${yyyy} | ${hh}:${mn}`;

//  send new message from textarea to div
send.addEventListener('click', () => {
    const message = document.createElement('div');
    const delMessage = document.createElement('div');
    const newMessage = document.querySelector('[data-message]').value.replace(/\n/g, '<br/>');
    const userName = document.querySelector('[data-userName]').value;

    //  inner to a new div
    if (newMessage) {
        message.innerHTML = `<span>From:${userName}</span><p>${newMessage}</p><span>${today}</span>`;
        delMessage.innerHTML = '&#128465;';

        //  add del button
        message.appendChild(delMessage);
        delMessage.classList.add('delMessage');

        //  add masseng to tweets
        tweets.appendChild(message);
        message.classList.add('message');

        //  clear inputArena
        document.querySelector('[data-message]').value = '';

        //  scroll to last message
        tweets.lastChild.scrollIntoView(false);

        //  not red border if message enter
        inputArea.style.border = 'none';

        //  delite message
        delMessage.addEventListener('click', (event) => {
            const confDialog = window.confirm('delete this message?');
            const removeParent = event.target;
            if (confDialog) {
                if (removeParent.tagName === 'DIV') {
                    removeParent.parentNode.remove(message);
                }
                alert('The message has been deleted.');
            } else {
                window.alert('The message has not been deleted.');
            }
        });
    } else {
        // red border if message not enter
        inputArea.style.border = '1px solid red';
    }
});

//  enter - send message + shift+enter - \n
inputArea.addEventListener('keyup', (event) => {
    if (event.code === 'Enter' && !event.shiftKey) {
        send.click();
    } if (event.code === event.shiftKey) {
        event.preventDefault();
    }
});

