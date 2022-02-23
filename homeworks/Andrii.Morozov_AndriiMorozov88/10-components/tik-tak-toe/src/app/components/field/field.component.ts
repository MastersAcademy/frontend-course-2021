import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { RxjsService } from '../../services/rxjs.service';
import { Player } from '../../enums/player_enum';
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
    constructor(public gameService: GameService, private rxjsService: RxjsService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.gameService.player = player);
    }

    ngOnInit(): void {
        this.gameService.currentReset();
    }

    move(index:number):void {
        if (this.gameService.fieldsquares[index] !== Player.empty) return;
        if (this.gameService.gameOver) return;
        this.gameService.fieldsquares[index] = this.gameService.player;
        this.gameService.checkWinCombination();
        this.gameService.togglePlayer();
        this.rxjsService.changePlayer(this.gameService.player);
    }
}

