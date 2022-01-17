import { Component } from '@angular/core';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent {
    countPlayerOne = 0;
    countPlayerTwo = 0;
    resetAll() {
        location.reload();
    }
}
