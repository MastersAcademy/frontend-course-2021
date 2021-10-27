const button = document.querySelector('[data-button]');
const input = document.querySelector('[data-input]');
const scroll = document.querySelector('.main-window');
const message = document.querySelector('[data-window-message]');

let buttonSend;
let data = '';
let index = 1;

function updateValue(e) {
    data = e.target.value;
}

const crateAndDeleteMessage = () => {
    if (data.length) {
        message.insertAdjacentHTML('beforeend', `<div class="main-new-message"><p class="main-new-text">${data}</p><button class="main-new-button-delete" data-columns=${index++}>X</button></div>`);
        data = '';
        input.value = '';
        buttonSend = document.querySelectorAll('[data-columns]');
        for (let i = 0; i < buttonSend.length; i++) {
            // eslint-disable-next-line no-loop-func
            buttonSend[i].addEventListener('click', () => {
                buttonSend[i].parentNode.remove(buttonSend[i].dataset.columns);
            });
        }
        scroll.scrollTop = scroll.scrollHeight;
    }
    return null;
};

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        crateAndDeleteMessage();
    }
});

button.addEventListener('click', () => {
    crateAndDeleteMessage();
});

input.addEventListener('input', updateValue);
