export class FullScreen {
    private readonly templateElement: HTMLTemplateElement;
    private readonly spinnerElement: HTMLDivElement;

    constructor(
        private readonly el: HTMLElement,
    ) {

        const templateElement = this.el.querySelector<HTMLTemplateElement>('[data-full-screen-template]');
        const spinnerElement = this.el.querySelector<HTMLDivElement>('[data-full-screen-spinner]');

        if(!templateElement) throw new Error('Missing element with [data-full-screen-template]');

        if(!spinnerElement) throw new Error('Missing element with [data-full-screen-spinner]')

        this.templateElement = templateElement;
        this.spinnerElement = spinnerElement;

        this.listenEvents();
    }

    private listenEvents(): void {
        this.el.addEventListener('click', event => {
            const image: HTMLElement = (event.target as HTMLElement);
            const data: DOMStringMap = image.dataset;

            if(data.fullScreen !== undefined) {
                this.el.classList.add('hidden');
                const childElement: HTMLImageElement = this.el.querySelector('[data-full-screen-image]') as HTMLImageElement;
                this.el.removeChild(childElement);
            }
        })
    }

    private createImage(source: string): Element | null {
        const content = this.templateElement.content.cloneNode(true);
        const element: HTMLElement | null = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
        element?.setAttribute('src', source);
        return element;
    }

    private toggleImage(element: HTMLElement): void {
        this.el.classList.remove('hidden');
        this.spinnerElement.classList.remove('hidden');

        setTimeout(() => {
            this.el.append(element);
            this.spinnerElement.classList.add('hidden');
        }, 1000);
    }
}
