import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RxjsService } from '../rxjs.service';
import { Player } from '../enums';
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
    player!: number;
    fieldsquares = this.dataService.fieldsquares;
    constructor(private rxjsService: RxjsService, public dataService: DataService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.dataService.player = player);
    }
    /*@Output() getScore = new EventEmitter<number>();
    changeScore(point:number):void {
        this.getScore.emit(point);
    }*/
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

