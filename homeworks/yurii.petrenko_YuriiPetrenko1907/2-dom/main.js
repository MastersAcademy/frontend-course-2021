const addMessageBtn = document.getElementById('add-message-btn');
const deskMessageInput = document.getElementById('description-message');
const MessagesChat = document.querySelector('.messages-chat');

let messages = [];

const createTemplate = (message) => `
        <div class="message-item">
            <div class="description">${message}</div>
        </div>
    `;

const fillHtmlList = () => {
    MessagesChat.innerHTML = '';
    if (messages.length > 0) {
        messages.forEach((item, index) => {
            MessagesChat.innerHTML += createTemplate(item, index);
        });
    }
};

const updateLocal = () => {
    localStorage.setItem('messages', JSON.stringify(messages));
};

const updatelist = () => {
    updateLocal();
    fillHtmlList();
    deskMessageInput.value = '';
};

const addMessage = () => {
    messages.push(deskMessageInput.value);
    updatelist();
};

const init = () => {
    if (localStorage.messages) {
        messages = JSON.parse(localStorage.getItem('messages'));
    }
    addMessageBtn.addEventListener('click', addMessage);
    document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addMessage();
        }
    });
    fillHtmlList();
};

init();
