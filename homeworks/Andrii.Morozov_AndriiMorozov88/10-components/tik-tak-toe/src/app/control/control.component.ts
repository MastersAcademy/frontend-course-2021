import { Component, ViewChild } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { Player, Icons } from '../enums';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent {
    iconSize = 30;
    icon = 'cross';
    playerOne = Player.cross;
    playerTwo = Player.zero;
    iconCross = Icons.cross;
    iconZero = Icons.zero;
    /*countPlayerOne = 0;
    countPlayerTwo = 0;
    @ViewChild(FieldComponent)
    childComponent!: FieldComponent;
    currentReset():void {
        this.childComponent.currentReset();
    }
    resetAll(): void {
        this.countPlayerOne = 0;
        this.countPlayerTwo = 0;
        this.currentReset();
    }
    changeCount(point:number):void {
        if (point === PlayerMove.cross) {
            this.countPlayerOne++;
        }
        if (point === PlayerMove.zero) {
            this.countPlayerTwo++;
        }
    }*/
}
