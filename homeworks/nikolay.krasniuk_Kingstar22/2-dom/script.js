const messageWindow = document.querySelector('[data-message]');
const entryTextarea = document.querySelector('[data-textarea]');
const sendBtn = document.querySelector('[data-btn]');
const template = document.querySelector('[data-template]');
const messageText = template.content.querySelector('[data-message-text]');

const messagesArray = [];

function generalMessage(item) {
    messageText.textContent = item;
    messageWindow.append(template.content.cloneNode(true));
}

// function deleteMessage() {
//     const deleteBtn = document.querySelectorAll('[data-delete-btn]');

//     deleteBtn.forEach((item, i) => {
//         item.addEventListener('click', () => {
//             console.log(i);
//         });
//     });
// }

function addMessage() {
    if (entryTextarea.value.length !== 0) {
        const messagesObj = {
            message: entryTextarea.value,
        };
        messagesArray.push(messagesObj);
        const newMessage = messagesArray[messagesArray.length - 1].message;
        generalMessage(newMessage);
        entryTextarea.value = '';
    } else {
        alert('field is empty');
    }
}

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addMessage();
});

entryTextarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addMessage();
        // deleteMessage();
    }
});
