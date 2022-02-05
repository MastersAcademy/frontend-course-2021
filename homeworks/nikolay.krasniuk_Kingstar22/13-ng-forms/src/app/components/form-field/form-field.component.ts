import {Component, forwardRef, Input} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => FormFieldComponent),
            multi: true
        }
    ]
})
export class FormFieldComponent implements ControlValueAccessor{
    @Input() value = '';
    @Input() label = '';
    @Input() errorStyleInput!: boolean | null;
    @Input() icon = 'close';
    @Input() showPassword = false;

    handleInput(value: string) {
        this.onChange(value)
    }

    writeValue(value: string): void {
        this.value = value
    }
    onChange!: (value: string) => void;
    onTouched!: ()=> void;

    registerOnChange(fn: any): void {
        this.onChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn
    }
}
