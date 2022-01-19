import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})
export class ScoreComponent {
    constructor(public gameService: GameService) {}
}
