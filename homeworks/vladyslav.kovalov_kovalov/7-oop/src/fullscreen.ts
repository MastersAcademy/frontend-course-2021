export class FullScreen {
    private readonly templateElement: HTMLTemplateElement;
    private readonly spinnerElement: HTMLDivElement;
    private readonly closeElement: HTMLElement;
    private readonly containerElement: HTMLDivElement;

    constructor(
        private readonly el: HTMLElement,
    ) {

        const containerElement: HTMLDivElement | null = this.el.querySelector<HTMLDivElement>('[data-full-screen-container]');
        const templateElement: HTMLTemplateElement | null = this.el.querySelector<HTMLTemplateElement>('[data-full-screen-template]');
        const spinnerElement: HTMLDivElement | null = this.el.querySelector<HTMLDivElement>('[data-full-screen-spinner]');
        const closeElement: HTMLElement | null = this.el.querySelector<HTMLElement>('[data-full-screen-close]');

        if(!templateElement) throw new Error('Missing element with [data-full-screen-template]');
        if(!spinnerElement) throw new Error('Missing element with [data-full-screen-spinner]');
        if(!closeElement) throw new Error('Missing element with [data-full-screen-close]');
        if(!containerElement) throw new Error('Missing element with [data-full-screen-container]');

        this.containerElement = containerElement;
        this.templateElement = templateElement;
        this.spinnerElement = spinnerElement;
        this.closeElement = closeElement;

        this.listenEvents();
    }

    private listenEvents(): void {
        this.el.addEventListener('click', event => {
            const image: HTMLElement = (event.target as HTMLElement);
            const data: DOMStringMap = image.dataset;

            if(data.fullScreen === '') {
                this.el.classList.add('hidden');
                if(this.containerElement.children) this.containerElement.innerHTML = '';
            }
        });

        this.closeElement.addEventListener('click', () => {
            this.el.classList.add('hidden');
            this.containerElement.innerHTML = '';
        });
    }

    private createImage(source: string): Element | null {
        const content: any = this.templateElement.content.cloneNode(true);
        const element: HTMLElement | null = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
        element?.setAttribute('src', source);
        return element;
    }

    private toggleImage(element: HTMLElement): void {
        this.el.classList.remove('hidden');
        this.spinnerElement.classList.remove('hidden');

        const timeout = window.setTimeout(() => {
            this.containerElement.append(element);
            this.spinnerElement.classList.add('hidden');
            clearTimeout(timeout);
        }, 1000);
    }
}
