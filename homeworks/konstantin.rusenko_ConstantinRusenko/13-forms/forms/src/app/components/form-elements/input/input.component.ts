import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(
            () => InputComponent
        ),
        multi: true 
    }]
})
export class InputComponent implements ControlValueAccessor {

    @Input()
    public parentForm!: FormGroup;

    @Input()
    public fieldName!: string;

    @Input()
    public label!: string;

    public value!: string;

    public changed!: ( value: string ) => void;

    public touched!: ()=> void;

    get formField (): FormControl {
        return this.parentForm.get(this.fieldName) as FormControl;
    }

    writeValue(value: string): void {
        this.value = value;
    }
    registerOnChange(fn: never): void {
        this.changed = fn;
    }
    registerOnTouched(fn: never): void {
        this.touched = fn;
    }


}
