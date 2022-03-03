import { Component, Input } from '@angular/core';
import { Player } from '../../enums/player_enum';

@Component({
    selector: 'app-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.css']
})
export class SquareComponent  {
    @Input() player!:Player;
    @Input() icon!:string;
    get componentColor () {
        if (this.player === Player.cross) {
            return 'field__square--cross';
        }
        if (this.player === Player.zero) {
            return 'field__square--zero';
        }
        return null
    }
}
