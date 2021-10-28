const addMessageBtn = document.getElementById('add-message-btn');
const deskMessageInput = document.getElementById('description-message');
const MessagesWrapper = document.querySelector('.messages-wrapper');

let messages;
!localStorage.messages ? messages = [] : messages = JSON.parse(localStorage.getItem('messages'));

let MessageItemElems = [];

function Message(description) {
    this.description = description;
}

const createTemplate = (message, index) => {
    return `
        <div class="message-item">
            <div class="description">${message.description}</div>
                <div class="buttons">
                    <button onclick="deleteMessage(${index})" class="btn-delete">X</button>
                </div>
        </div>
    `
}

const fillHtmlList = () => {
    MessagesWrapper.innerHTML = "";
    if(messages.length > 0) {
        messages.forEach((item, index) => {
            MessagesWrapper.innerHTML += createTemplate(item, index);
        });
        MessageItemElems = document.querySelectorAll('.message-item');
    }
}

fillHtmlList();

const updateLocal = () => {
    localStorage.setItem('messages', JSON.stringify(messages));
}

const update = () => {
    updateLocal();
    fillHtmlList();
    deskMessageInput.value = '';
}

addMessageBtn.addEventListener('click', () => {
    messages.push(new Message(deskMessageInput.value));
    update();
})

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
    messages.push(new Message(deskMessageInput.value));
    update ();}
})

const deleteMessage = index => {
    messages.splice(index, 1);
    update();
}