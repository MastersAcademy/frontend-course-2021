import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-who-turn',
    templateUrl: './who-turn.component.html',
    styleUrls: ['./who-turn.component.css']
})
export class WhoTurnComponent{

    @Input() whoTurn = 'undefined';

}
