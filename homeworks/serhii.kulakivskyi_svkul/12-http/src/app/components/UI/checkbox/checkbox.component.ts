import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
    @Input() checked: boolean | undefined = false;
    @Output() handleChange = new EventEmitter();

    handleClick(status: boolean) {
        this.handleChange.emit(status)
    }
}
