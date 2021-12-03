export class FullScreen {
    private readonly templateElement: HTMLTemplateElement;
    private readonly spinnerElement: HTMLDivElement;
    private readonly closeElement: HTMLElement;

    constructor(
        private readonly el: HTMLElement,
    ) {

        const templateElement = this.el.querySelector<HTMLTemplateElement>('[data-full-screen-template]');
        const spinnerElement = this.el.querySelector<HTMLDivElement>('[data-full-screen-spinner]');
        const closeElement = this.el.querySelector<HTMLElement>('[data-full-screen-close]');

        if(!templateElement) throw new Error('Missing element with [data-full-screen-template]');
        if(!spinnerElement) throw new Error('Missing element with [data-full-screen-spinner]')
        if(!closeElement) throw new Error('Missing element with [data-full-screen-close]')

        this.templateElement = templateElement;
        this.spinnerElement = spinnerElement;
        this.closeElement = closeElement;

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
        });

        this.closeElement.addEventListener('click', () => {
            this.el.classList.add('hidden');
            const childElement: HTMLImageElement = this.el.querySelector('[data-full-screen-image]') as HTMLImageElement;
            this.el.removeChild(childElement);
        });
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

        const timeout = window.setTimeout(() => {
            this.el.append(element);
            this.spinnerElement.classList.add('hidden');
            clearTimeout(timeout);
        }, 1000);
    }
}
