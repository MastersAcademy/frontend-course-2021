import { Component, Input } from '@angular/core';
import { Player } from 'src/app/enums/player_enum';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent  {
    @Input() player!:Player;
    @Input() icon!:string;
    @Input() countPlayer!: number;
}
