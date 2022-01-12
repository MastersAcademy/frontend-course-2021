export class ScrollUpButton {
    constructor(
        mainSectionElement,
        scrollUpButton,
    ) {
        this.mainSectionElement = mainSectionElement;
        this.scrollUpButton = scrollUpButton;
        this.listenEvents();
    }

    listenEvents() {
        window.addEventListener('scroll', () => {
            const currentPosition = window.scrollY;
            const containerHeight = this.mainSectionElement.clientHeight;

            if (currentPosition > containerHeight) this.scrollUpButton.classList.remove('hidden');
            else this.scrollUpButton.classList.add('hidden');
        });

        this.scrollUpButton.addEventListener('click', () => {
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: 'smooth',
            });
        });
    }
}
