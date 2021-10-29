const buttonSendMessage = document.querySelector('[data-message-send]');
const textValueMessage = document.querySelector('[data-message-field]');
const scrollContent = document.querySelector('[data-main-container]');
const createMessageDiv = document.querySelector('[data-container-messages]');

const templateEl = document.querySelector('#template');

let index = 1;

const listenerButtonDeleted = (i) => {
    const buttonDelete = document.querySelector(`[data-button_delete="${i}"]`);
    buttonDelete.addEventListener('click', () => {
        document.querySelector(`[data-number_message="${buttonDelete.dataset.button_delete}"]`).remove();
    });
};

const createMessage = () => {
    if (!textValueMessage.value) return;

    templateEl.content.querySelector('[data-message-text]')
        .textContent = textValueMessage.value;

    templateEl.content.querySelector('[data-new-message]')
        .setAttribute('data-number_message', index);

    templateEl.content.querySelector('[data-button-delete-message]')
        .setAttribute('data-button_delete', index);

    const clonedNode = templateEl.content.cloneNode(true);
    createMessageDiv.append(clonedNode);

    textValueMessage.value = '';

    scrollContent.scrollTop = scrollContent.scrollHeight;

    listenerButtonDeleted(index++);
};

buttonSendMessage.addEventListener('click', () => createMessage());

textValueMessage.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        createMessage();
    }
});

// const addDataValue = (e) => {
//     data = e.target.value;
// };

// const createMessage = () => {
//     if (!data.length) return;
//     // returnTextContent.textContent = data;
//     // returnDiv.id = index++;
//     messageEl.append(templateEl.content.cloneNode(true));
//     data = '';
//     textareaEl.value = '';
//     scrollEl.scrollTop = scrollEl.scrollHeight;
// };

// const deleteMessage = () => {
//     const message2 = document.querySelectorAll('.main-new-message');
//     const buttonDEl = document.querySelectorAll('.main-new-button-delete');
//     for (let i = 0; i < message2.length; i++) {
//         buttonDEl[i].addEventListener('click', () => {
//             message2[i].remove(message2[i].id);
//         });
//     }
// };

// textareaEl.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//         e.preventDefault();
//         createMessage();
//         deleteMessage();
//     }
// });

// buttonEl.addEventListener('click', () => {
//     createMessage();
//     deleteMessage();
// });

// textareaEl.addEventListener('input', addDataValue);
