import { Component } from '@angular/core';
import { DataService } from '../data.service';

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
