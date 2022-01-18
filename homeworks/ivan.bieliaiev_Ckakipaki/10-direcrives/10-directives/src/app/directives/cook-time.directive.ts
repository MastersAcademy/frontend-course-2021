import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appCookTime]'
})
export class CookTimeDirective implements OnInit{

    @Input() timeNumber: number | null = 0;

    private timeColor = {
        fastTimeColor: '#8fce00',
        midTimeColor: '#FFE599',
        slowTimeColor: '#e06666',
        nullTimeCook: '#bcbcbc'
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit () {
        this.setStyle();
    }

    setStyle () {
        if (this.timeNumber === null) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.timeColor.nullTimeCook);
        } else if (this.timeNumber <= 50) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.timeColor.fastTimeColor);
        } else if (this.timeNumber <= 75) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.timeColor.midTimeColor);
        } else if (this.timeNumber > 75) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.timeColor.slowTimeColor);
        }
    }
}
