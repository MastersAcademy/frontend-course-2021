class App {
    constructor() {
        this.dialogue = document.querySelector('[data-dialogue]');
        this.template = document.querySelector('[data-chat-template]');
    }

    add(messageText) {
        const message = this.template.content.cloneNode(true);
        message.querySelector('[data-message-text]').textContent = messageText;
        this.dialogue.appendChild(message);
    }

    remove(element) {
        this.dialogue.removeChild(element);
    }

    clear() {
        this.dialogue.innerHTML = '';
    }
}

const app = new App();

document
    .querySelector('[data-message-form]')
    .addEventListener('submit', (e) => {
        const message = document.querySelector('[data-message-input]');

        if (message.value) {
            app.add(message.value);
            message.value = '';
        }

        e.preventDefault();
    });

document.querySelector('[data-clear]').addEventListener('click', () => {
    app.clear();
});

document.querySelector('[data-dialogue]').addEventListener('click', (e) => {
    if (e.target.dataset.messageButtonIcon === '') {
        const currentMessage = e.target.closest('[data-dialogue-message]');
        app.remove(currentMessage);
    }
});
