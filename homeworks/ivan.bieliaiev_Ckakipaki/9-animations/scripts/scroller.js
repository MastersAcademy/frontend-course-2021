export class Scroller {
    constructor(element) {
        this.scrollEl = element;
    }

    showUpEl() {
        this.scrollEl.classList.add('scroll-element__visible');
        this.scrollEl.classList.remove('scroll-element__hidden');
    }

    hideUpEl() {
        this.scrollEl.classList.remove('scroll-element__visible');
        this.scrollEl.classList.add('scroll-element__hidden');
    }
}
