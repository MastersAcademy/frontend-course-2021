import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
    constructor(public gameService: GameService) {
        this.gameService.currentPlayer$.subscribe(player => this.gameService.player = player);
    }

    ngOnInit(): void {
        this.gameService.currentReset();
    }

    move(index:number):void {
        this.gameService.move(index)
    }
}

