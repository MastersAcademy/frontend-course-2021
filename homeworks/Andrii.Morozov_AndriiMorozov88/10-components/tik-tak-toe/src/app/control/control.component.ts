import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent {
    @ViewChild(FieldComponent)
    childComponent!: FieldComponent;
    getCurrentReset() {
        this.childComponent.currentReset();
    }
    countPlayerOne = 0;
    countPlayerTwo = 0;
    resetAll() {
        location.reload();
    }
}
