import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { RxjsService } from '../rxjs.service';
import { Player } from '../enums';
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent {
    player!:number;
    fieldsquares: number[] = this.dataService.fieldsquares;
    constructor(private rxjsService: RxjsService, private dataService: DataService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.player = player);
    }
    @Output() getScore = new EventEmitter<number>();
    changeScore(point:number):void {
        this.getScore.emit(point);
    }
    ngOnInit() {
        this.currentReset();
    }
    currentReset():void {
        //this.fieldsquares = this.dataService.state.flat();
        this.player = Player.cross;
        //this.dataService.changePlayer(this.player);
        this.dataService.gameOver = false;
    }
    togglePlayer() {
        if (this.player === Player.cross) {
            this.player = Player.zero;
        } else {
            this.player = Player.cross;
        }
        return this.player
    }
    move(index:number):void {
        if (this.fieldsquares[index] === Player.empty && this.dataService.gameOver === false) {
            if (this.player === Player.cross) {
                this.dataService.fieldsquares[index] = Player.cross;
            } else {
                this.dataService.fieldsquares[index] = Player.zero;
            }
            this.dataService.checkWinCombination();
            this.togglePlayer();
            this.rxjsService.changePlayer(this.player);
        }
    }
}

