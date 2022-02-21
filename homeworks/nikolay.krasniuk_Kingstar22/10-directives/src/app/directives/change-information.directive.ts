import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[appChangeInformation]'
})
export class ChangeInformationDirective {
    @HostBinding('style.background') elColor = '';
    @HostBinding('innerText') elText = '';
    constructor() {return}
    @Input() set appChangeInformation(duration: number) {
        if (duration < 50) {
            this.elColor = 'green'
            this.elText = 'fast'
        } else if (duration <= 75) {
            this.elColor = '#DEA12F'
            this.elText = 'medium'
        } else {
            this.elColor = 'red'
            this.elText = 'slow'
        }
    }
}
