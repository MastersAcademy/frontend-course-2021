export class Buttons {
	constructor(
		public containerElement: HTMLDivElement,
	) {}

    private start(): void {}

    private end(): void {}

    private restart(): void {}

    // private getClick(): void {
    //     this.containerElement.addEventListener('click', event => {
    //         let action: EventTarget | null = event.target;
    //         if(action) this[action]();
    //     });
    // }
}
