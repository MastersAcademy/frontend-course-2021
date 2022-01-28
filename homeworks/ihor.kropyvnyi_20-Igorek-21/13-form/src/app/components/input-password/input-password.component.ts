import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-input-password',
    templateUrl: './input-password.component.html',
    styleUrls: ['./input-password.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => InputPasswordComponent),
            multi: true
        }
    ]
})
export class InputPasswordComponent implements ControlValueAccessor {

    @Input() value = '';
    @Input() validateStyle!: boolean | null;
    @Input() validateShowPassword!: boolean | null;
    public inputType = 'password';
    public inputTypeIcon = 'hide';

    public showPassword(): void {
        this.inputType = this.inputType == 'password' ? 'text': 'password';
        this.inputTypeIcon = this.inputTypeIcon == 'hide' ? 'show' : 'hide';
    }

    public handleInput(value: string): void {
        this.onChange(value)
    }

    public writeValue(value: string): void {
        this.value = value;
    }

    private onChange(value: string): void {
        this.value = value;
    }

    public onTouched(): void {
        console.log('touch');
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}
