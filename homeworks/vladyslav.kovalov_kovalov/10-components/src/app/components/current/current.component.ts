import { Component  } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
    selector: 'app-current',
    templateUrl: './current.component.html',
    styleUrls: ['./current.component.css']
})
export class CurrentComponent {
    constructor(public gameService: GameService) {}
}
