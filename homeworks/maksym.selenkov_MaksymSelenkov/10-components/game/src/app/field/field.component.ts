import { Component } from '@angular/core';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent {

    squares: [number, number, number][] = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];

    onChange(event: MouseEvent) {
        console.log(event.target)
        event.target.classList.toggle('black')
    }

    // constructor() { }
}
