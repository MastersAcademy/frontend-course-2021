import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Player, Icons } from '../enums';
import { ScoreService } from '../score.service';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent {
    iconSize = 30;
    playerOne = Player.cross;
    playerTwo = Player.zero;
    iconCross = Icons.cross;
    iconZero = Icons.zero;
    constructor(private dataService: DataService, public scoreService: ScoreService) {}
    currentReset() {
        this.dataService.currentReset()
    }
    resetAll(): void {
        this.scoreService.countPlayerOne = 0;
        this.scoreService.countPlayerTwo = 0;
        this.dataService.currentReset();
    }
}
