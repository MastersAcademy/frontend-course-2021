import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-field-errors',
    templateUrl: './field-errors.component.html',
    styleUrls: ['./field-errors.component.css']
})
export class FieldErrorsComponent {

    @Input()
    public formField!: FormControl;

}
