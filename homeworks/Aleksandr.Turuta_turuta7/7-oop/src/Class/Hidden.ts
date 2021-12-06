export class Hidden {
    public hidden(dataEl: HTMLElement, dataClass: string) {
        dataEl.classList.remove(`${dataClass}`)
    }

    public visible(dataEl: HTMLElement, dataClass: string) {
        dataEl.classList.add(`${dataClass}`)
    }
}
