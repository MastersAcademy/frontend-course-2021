import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css']
})
export class ResetComponent {

    constructor(public gameService: GameService) { }

    public onClickMatch() {
        this.gameService.resetCurrentGame();
    }

    public onClickAll() {
        this.gameService.resetAll();
    }

}
