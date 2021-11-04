export class Loader {
    constructor() {
        this.containerEl = document.querySelector('[data-posts-section]');
        this.templateElement = document.querySelector('[data-loader-template]');
    }

    create() {
        const content = this.templateElement.content.cloneNode(true);
        const element = content.querySelector('[data-loader]');
        return element;
    }

    add(element) {
        this.containerEl.append(element);
    }

    remove() {
        const loader = document.querySelector('[data-loader]');
        this.containerEl.removeChild(loader);
    }

    show() {
        const loader = document.querySelector('[data-loader]');
        loader.classList.remove('display-none');
    }
}
