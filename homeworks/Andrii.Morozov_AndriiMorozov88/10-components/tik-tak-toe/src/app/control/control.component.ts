import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { PlayerMove } from '../enums';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent {
    @ViewChild(FieldComponent)
    childComponent!: FieldComponent;
    getCurrentReset():void {
        this.childComponent.currentReset();
    }
    countPlayerOne = 0;
    countPlayerTwo = 0;
    resetAll(): void {
        this.countPlayerOne = 0;
        this.countPlayerTwo = 0;
        this.getCurrentReset();
    }
    getScore(point:number):void {
        if (point === PlayerMove.cross) {
            this.countPlayerOne++;
        }
        if (point === PlayerMove.zero) {
            this.countPlayerTwo++;
        }
    }
}
