import { Component, Input } from '@angular/core';
import { PlayerMove, Icons } from '../enums';

@Component({
    selector: 'app-getter',
    templateUrl: './getter.component.html',
    styleUrls: ['./getter.component.css']
})
export class GetterComponent {
    @Input() player!:number;
    @Input() iconSize!:number;
    sprite = 'assets/sprite.svg#';
    get iconType() {
        if (this.player === PlayerMove.cross) {
            return Icons.cross
        }
        if (this.player === PlayerMove.zero) {
            return Icons.zero
        }
        return null
    }
}
