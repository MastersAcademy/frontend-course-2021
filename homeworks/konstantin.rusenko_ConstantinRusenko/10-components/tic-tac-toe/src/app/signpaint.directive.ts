import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appSignpaint]'
})
export class SignpaintDirective {

    @Input() appSignpaint = '';

    constructor(private el: ElementRef) {}

    @HostListener('click') onClick() {
        this.placeSign(this.appSignpaint);
    }

    private placeSign(sign: string) {
        console.log(this.el.nativeElement);
        const use = this.el.nativeElement.querySelector('use');
        use?.setAttribute('href', `./assets/sprite.svg#${sign}`);
    }

}
