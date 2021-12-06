export class FullScreen {
    constructor(
        private fullScreenElement: HTMLElement | null,
        private fullScreenCloseElement: HTMLElement | null,
        private fullScreenImageElement: HTMLElement | null

    ) {
        this.listenEvents();

    }
    private listenEvents(): void {
        this.fullScreenElement?.addEventListener('click', event => {
            const image: HTMLElement = (event.target as HTMLElement);
            const data: DOMStringMap = image.dataset;

            if(data.fullScreen === '') {
                this.fullScreenElement?.classList.add('hidden');
            }
        });

        this.fullScreenCloseElement?.addEventListener('click', () => {
            this.fullScreenElement?.classList.add('hidden');
        });
    }

    public toggle(source: string): void {
        this.fullScreenImageElement?.setAttribute('src', source);
        this.fullScreenElement?.classList.remove('hidden');
    }
}

export interface IFullScreen {
    fullScreenElement: HTMLElement | null;
    fullScreenCloseElement: HTMLElement | null;
    fullScreenImageElement: HTMLElement | null;
    listenEvents: () => void;
    toggle: (source: string) => void;
}

// export interface IStorage {
//     images: string[];
//     save(image: string): number;
// }
