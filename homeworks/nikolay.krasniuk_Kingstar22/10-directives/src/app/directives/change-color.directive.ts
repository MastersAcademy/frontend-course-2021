import {Directive, HostBinding, Input} from '@angular/core';


@Directive({
    selector: '[appChangeColorDirective]'
})
export class ChangeColorDirective {
    @HostBinding('style.color') elColor = '';
    constructor() {return}
    @Input() set appChangeColorDirective(duration: number) {
        duration < 50 ? this.elColor = 'green' : duration <= 75 ? this.elColor = '#DEA12F' : this.elColor = 'red'
    }
}
