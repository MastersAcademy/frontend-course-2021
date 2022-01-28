import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-input-login',
    templateUrl: './input-login.component.html',
    styleUrls: ['./input-login.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => InputLoginComponent),
            multi: true
        }
    ]
})
export class InputLoginComponent implements ControlValueAccessor {

    @Input() value = '';
    @Input() validateStyle!: boolean | null;

    public handleInput(value: string) {
        this.onChange(value)
    }

    public writeValue(value: string) {
        this.value = value
    }

    private onChange(value: string) {
        this.value = value
    }

    public onTouched() {
        console.log('touch')
    }

    public registerOnChange(fn: any) {
        this.onChange = fn
    }

    public registerOnTouched(fn: any) {
        this.onTouched = fn
    }
}
