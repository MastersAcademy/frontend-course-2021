import {Directive, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appChangeInformation]'
})
export class ChangeInformationDirective {
    @Input('appChangeInformation') color = 'blue';

    @HostListener('mouseenter') onMouseEnter() {
        console.log(this.color);
    }

}
