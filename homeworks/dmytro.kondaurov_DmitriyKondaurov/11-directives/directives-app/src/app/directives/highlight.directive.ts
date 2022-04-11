import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {DurationHighlightSpeedService} from '../services/duration-highlight-speed.service';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
    @Input() appHighlight = '';
    @Input() curCompDuration = '';
    color = '';
    constructor( private element: ElementRef, private choseHighlight: DurationHighlightSpeedService) {}

    ngOnInit(): void {
        const curHighLightColor = this.choseHighlight.speedMeasurement(Number(this.curCompDuration))
        this.highlight(curHighLightColor);
    }
    private highlight (color: string) {
        this.element.nativeElement.style.fill = color;
        this.element.nativeElement.style.color = color;
    }
}
