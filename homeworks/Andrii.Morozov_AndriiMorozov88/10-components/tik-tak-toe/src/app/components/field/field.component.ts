import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RxjsService } from '../../services/rxjs.service';
import { Player } from '../../enums/player_enum';
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
    constructor(public dataService: DataService, private rxjsService: RxjsService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.dataService.player = player);
    }
    ngOnInit(): void {
        this.dataService.currentReset();
    }
    move(index:number):void {
        if (this.dataService.fieldsquares[index] === Player.empty && this.dataService.gameOver === false) {
            if (this.dataService.player === Player.cross) {
                this.dataService.fieldsquares[index] = Player.cross;
            } else {
                this.dataService.fieldsquares[index] = Player.zero;
            }
            this.dataService.checkWinCombination();
            this.dataService.togglePlayer();
            this.rxjsService.changePlayer(this.dataService.player);
        }
    }
}

