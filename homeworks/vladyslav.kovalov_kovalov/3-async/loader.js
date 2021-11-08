export class Loader {
    constructor() {
        this.containerEl = document.querySelector('[data-posts-section]');
        this.templateElement = document.querySelector('[data-loader-template]');
    }

    remove() {
        const loader = document.querySelector('[data-loader]');
        this.containerEl.removeChild(loader);
    }

    show() {
        const content = this.templateElement.content.cloneNode(true);
        const element = content.querySelector('[data-loader]');
        this.containerEl.append(element);
    }
}
