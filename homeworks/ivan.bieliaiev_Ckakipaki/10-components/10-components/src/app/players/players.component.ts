import {Component, Input} from '@angular/core';
import {IPlayer} from '../app.component';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent {
    @Input() playerState: IPlayer[] = [];
}
