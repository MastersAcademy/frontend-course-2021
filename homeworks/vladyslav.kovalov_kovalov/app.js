class App {
    constructor() {
        this.dialogue = document.querySelector("[data-dialogue]");
        this.template = document.querySelector("[data-chat-template]");
    }

    create(message) {
        const element = document.createElement("span");
        element.classList.add("message");
        element.dataset.dialogueMessage = "";

        const text = document.createElement("span");
        text.classList.add("message__text");
        text.textContent = message;

        const button = document.createElement("button");
        button.classList.add("message__button");
        button.dataset.messsageButton = "";

        const icon = document.createElement("i");
        icon.classList.add("message__icon", "fas", "fa-times");
        icon.dataset.messageButtonIcon = "";

        button.append(icon);
        element.append(text);
        element.append(button);

        return element;
    }

    add(element) {
        const clone = this.template.content.cloneNode(true);
        clone.append(element);
        this.dialogue.append(clone);
    }

    remove(element) {
        if (confirm("Are you sure?")) {
            this.dialogue.removeChild(element);
        }
    }

    clear() {
        this.dialogue.innerHTML = "";
    }
}

const app = new App();

document
    .querySelector("[data-message-form]")
    .addEventListener("submit", (e) => {
        const message = document.querySelector("[data-message-input]");

        if (message.value) {
            const element = app.create(message.value);
            app.add(element);
            message.value = "";
        }

        e.preventDefault();
    });

document.querySelector("[data-clear]").addEventListener("click", () => {
    if (confirm("Are you sure?")) {
        app.clear();
    }
});

document.querySelector("[data-dialogue]").addEventListener("click", (e) => {
    if (e.target.dataset.messageButtonIcon === "") {
        const currentMessage = e.target.closest("[data-dialogue-message]");
        app.remove(currentMessage);
    }
});
