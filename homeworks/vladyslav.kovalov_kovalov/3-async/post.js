export class Post {
    constructor({ id, body, title }) {
        this.templateEl = document.querySelector('[data-post-template]');
        this.containerEl = document.querySelector('[data-posts-section]');
        this.id = id;
        this.title = title;
        this.body = body;
    }

    render() {
        const element = this.templateEl.content.cloneNode(true);
        element.querySelector('[data-post-title]').textContent = this.capitalizeString(this.title);
        element.querySelector('[data-post-body]').textContent = this.capitalizeString(this.body);
        element.querySelector('[data-post]').dataset.id = this.id;
        this.containerEl.append(element);
    }

    capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
