export class Notification {
    constructor() {
        this.templateEl = document.querySelector('[data-notification-message-template]');
        this.containerEl = document.querySelector('[data-posts-section]');
    }

    create(textMessage) {
        const content = this.templateEl.content.cloneNode(true);
        const element = content.querySelector('[data-notification-message]');
        element.querySelector('[data-notification-message-body]').textContent = textMessage;
        return element;
    }

    remove() {
        const notification = document.querySelector('[data-notification-message]');
        this.containerEl.removeChild(notification);
    }

    add(element) {
        this.containerEl.prepend(element);
    }

    show() {
        const notification = document.querySelector('[data-notification-message]');
        notification.classList.remove('display-none');
    }
}
