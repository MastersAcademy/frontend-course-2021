import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(
            () => PasswordInputComponent
        ),
        multi: true 
    }]
})
export class PasswordInputComponent implements ControlValueAccessor {

    @Input()
    public parentForm!: FormGroup;

    @Input()
    public fieldName!: string;

    @Input()
    public label!: string;

    public passwordFieldType?: string = 'password';

    public value!: string;

    public changed!: ( value: string ) => void;

    public touched!: ()=> void;

    public buttonShowName = 'show';

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

    public togglePasswordVisible (): void {
        this.passwordFieldType =
            this.passwordFieldType === 'text'
                ? 'password'
                : 'text';
        if( this.passwordFieldType === 'text') {
            this.buttonShowName = 'hide';
        } else {
            this.buttonShowName = 'show';
        }
    }
}
